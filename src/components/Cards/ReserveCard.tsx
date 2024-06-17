'use client';
import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import {
  reserveFormSchema,
  ReserveFormData,
} from '@/interfaces/ReserveFormSchema';
import { ReserveApiErrors } from '@/interfaces/ReserveApiErrors';

interface ReserveCardProps {
  id: number;
}

const ReserveCard = ({ id }: ReserveCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveFormData>({ resolver: zodResolver(reserveFormSchema) });
  const [appliance, setAppliance] = useState<appliaceInterface>();
  const [uploadError, setUploadError] = useState<ReserveApiErrors>({});
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    fetch(`/api/appliances/${id}`).then(async (data) => {
      const result = await data.json();

      setAppliance(result);
    });
  }, [id]);

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('comments', data.comments);

    const response = await fetch(`/api/appliances/reserve/${id}`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.status !== 200) {
      setUploadSuccess(false);
      return setUploadError(result);
    }

    setUploadSuccess(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col justify-center items-center w-[90%] p-5 border rounded-xl bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white lg:w-3/4 space-y-5"
      >
        <h2 className="text-3xl">Reserve {appliance?.applianceName}</h2>
        <div className="flex flex-col w-3/4 space-y-2">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            {...register('email')}
            className="rounded p-2 text-black"
            type="text-area"
            name="email"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col w-3/4 space-y-2">
          <label className="text-xl" htmlFor="comments">
            Comments (optional)
          </label>
          <input
            {...register('comments')}
            className="rounded p-2 text-black"
            type="text-area"
            name="comments"
            id="comments"
          />
          {errors.comments && (
            <p className="text-red-500">{errors.comments.message}</p>
          )}
        </div>

        <button
          className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-white text-black rounded-xl "
          type="submit"
        >
          Submit
        </button>
      </form>

      {uploadError && (
        <div className="text-2xl lg:text-4xl text-red-500 text-center w-[90%] lg:w-3/4">
          <p>{uploadError.message}</p>
        </div>
      )}

      {uploadSuccess && (
        <div className="text-2xl lg:text-4xl text-green-600 text-center w-[90%] lg:w-3/4">
          Appliance Reserved Successfully. You will hear from us soon!
        </div>
      )}
    </>
  );
};

export default ReserveCard;
