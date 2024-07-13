'use Client';
import Image from 'next/image';
import { PermitInstructions } from '@prisma/client';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction, useState } from 'react';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';
import {
  PermitInstructionSchema,
  PermitInstructionType,
} from '@/interfaces/PermitInstructionsSchema';

interface InstructionCardProps {
  permitInstruction: PermitInstructions;
  originalInstructions: PermitInstructions[];
  allInstructions: PermitInstructions[];
  setAllInstructions: Dispatch<
    SetStateAction<PermitInstructions[] | undefined>
  >;
  setOriginalInstructions: Dispatch<
    SetStateAction<PermitInstructions[] | undefined>
  >;
}

const InstructionCard = ({
  permitInstruction,
  originalInstructions,
  allInstructions,
  setAllInstructions,
  setOriginalInstructions,
}: InstructionCardProps) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isNewInstruction, setIsNewInstruction] = useState(
    permitInstruction.id >
      (originalInstructions.length > 0
        ? originalInstructions[originalInstructions.length - 1].id
        : 0)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PermitInstructionType>({
    resolver: zodResolver(PermitInstructionSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('description', data.description);
    formData.append('image', data.image[0]);

    if (isNewInstruction) {
      const response = await fetch('/api/admin/instructions', {
        method: 'POST',
        body: formData,
      });

      const result =
        (await response!.json()) as ApiResponse<PermitInstructions>;

      if (result.status !== 201) {
        setError(true);
        setAllInstructions(originalInstructions);
        return;
      }

      setSuccess(true);
      setAllInstructions([
        ...(allInstructions
          ? allInstructions.filter(
              (instruction) => instruction.id !== permitInstruction.id
            )
          : []),
        result.data!,
      ]);
      setOriginalInstructions([
        ...(allInstructions
          ? allInstructions.filter(
              (instruction) => instruction.id !== permitInstruction.id
            )
          : []),
        result.data!,
      ]);
      setIsNewInstruction(false);
      return;
    } else {
      const response = await fetch(
        `/api/admin/instructions/${permitInstruction.id}`,
        {
          method: 'PUT',
          body: formData,
        }
      );

      const result =
        (await response!.json()) as ApiResponse<PermitInstructions>;

      if (result.status !== 200) {
        setError(true);
        setAllInstructions(originalInstructions);
        return;
      }

      setSuccess(true);
      setAllInstructions([
        ...(allInstructions
          ? allInstructions.filter(
              (instruction) => instruction.id !== permitInstruction.id
            )
          : []),
        result.data!,
      ]);
      setOriginalInstructions([
        ...(allInstructions
          ? allInstructions.filter(
              (instruction) => instruction.id !== permitInstruction.id
            )
          : []),
        result.data!,
      ]);
      setIsNewInstruction(false);
    }
  };

  const handleDelete = async () => {
    setAllInstructions(
      allInstructions?.filter(
        (instruction) => instruction.id !== permitInstruction?.id
      )
    );

    if (isNewInstruction) return;

    const result = await fetch(
      `/api/admin/instructions/${permitInstruction.id}`,
      { method: 'DELETE' }
    );

    const response = (await result.json()) as ApiResponse<undefined>;

    if (response.status !== 204) {
      setError(true);
      setAllInstructions(originalInstructions);
      return;
    }

    setOriginalInstructions(allInstructions);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90vw] bg-slate-300 p-3 flex flex-col lg:flex-row justify-center items-center rounded"
    >
      <div className="lg:w-1/2 flex flex-col justify-center items-center m-5">
        {error && (
          <p className="text-red-500 text-2xl text-center w-full px-5 m-2">
            Error - Something when wrong on the server
          </p>
        )}

        {success && (
          <p className="text-2xl text-center w-full px-5 text-green-600 m-2">
            Instruction Updated Successfully
          </p>
        )}
        {permitInstruction.imageUrl && (
          <Image
            src={permitInstruction?.imageUrl!}
            height={330}
            width={330}
            alt={`Image of ${permitInstruction?.description}`}
            className="w-[330px] h-[330px]"
          />
        )}
        {isNewInstruction && <p>Image Required</p>}
        <input {...register('image')} type="file" id="image" name="image" />
        {errors.image && (
          <p className="text-red-500">{errors.image.message?.toString()}</p>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center space-y-3">
        <textarea
          {...register('description')}
          className="w-full h-60 p-2"
          defaultValue={permitInstruction?.description}
          name="description"
          id="description"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="space-x-3">
          <GreenButton type="submit">
            {isNewInstruction ? 'Create' : 'Update'}
          </GreenButton>

          <RedButton onClick={() => handleDelete()}>Delete</RedButton>
        </div>
      </div>
    </form>
  );
};

export default InstructionCard;
