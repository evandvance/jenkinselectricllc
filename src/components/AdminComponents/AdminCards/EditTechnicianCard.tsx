'use client';
import { useState, Dispatch, SetStateAction } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Technicians } from '@prisma/client';
import {
  EditTechnicianFormData,
  editTechnicianSchema,
} from '@/interfaces/TechnicianUploadFormSchema';
import GreenButton from '@/components/Buttons/GreenButton';
import RedButton from '@/components/Buttons/RedButton';

interface EditTechnicianCardProps {
  technician: Technicians;
  allTechnicians: Technicians[];
  setTechnicians: Dispatch<SetStateAction<Technicians[] | undefined>>;
}

const EditTechnicianCard = ({
  technician,
  setTechnicians,
  allTechnicians,
}: EditTechnicianCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTechnicianFormData>({
    resolver: zodResolver(editTechnicianSchema),
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDelete = async (id: number) => {
    const oldTechnicians = allTechnicians;
    setTechnicians([
      ...allTechnicians.filter((tech) => tech.id !== technician.id),
    ]);

    const result = await fetch(`/api/admin/technicians/${id}`, {
      method: 'DELETE',
    });

    const response = (await result.json()) as ApiResponse<Technicians>;
    if (response.status !== 204) {
      setTechnicians(oldTechnicians);
    }
  };

  const onSumbit = async (data: FieldValues) => {
    const newTechnician = {
      firstName: data.firstName,
      lastName: data.lastName,
      bio: data.bio,
      isCertified: data.isCertified,
      imageUrl: technician.imageUrl,
      id: technician.id,
    };
    const oldTechnicians = allTechnicians;

    setTechnicians([
      ...allTechnicians.filter((tech) => tech.id !== technician.id),
      newTechnician,
    ]);

    const formData = new FormData();

    formData.append('firstName', newTechnician.firstName);
    formData.append('lastName', newTechnician.lastName);
    formData.append('bio', newTechnician.bio);
    formData.append('isCertified', newTechnician.isCertified);

    const response = await fetch(`/api/admin/technicians/${technician.id}`, {
      method: 'PUT',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<Technicians>;

    if (result.status !== 200) {
      setTechnicians(oldTechnicians);
      return setError(true);
    }

    setSuccess(true);
  };

  return (
    <div className="w-[90vw] bg-slate-300 rounded-xl flex flex-col items-center justify-center">
      {error && (
        <p className="text-red-500 text-2xl text-center w-full px-5 m-2">
          Error - Something when wrong on the server
        </p>
      )}

      {success && (
        <p className="text-2xl text-center w-full px-5 text-green-600 m-2">
          Technician Updated Successfully
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="w-full flex flex-col space-y-3 lg:flex-row p-3 lg:px-8 items-center justify-between"
      >
        <div className="flex flex-col justify-center items-center lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4">
          <input
            {...register('firstName')}
            defaultValue={technician.firstName}
            className="rounded p-2 text-black w-60"
            type="text"
            name="firstName"
            id="firstName"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}

          <input
            {...register('lastName')}
            defaultValue={technician.lastName}
            className="rounded p-2 text-black w-60"
            type="text"
            name="lastName"
            id="lastName"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <textarea
          {...register('bio')}
          defaultValue={technician.bio}
          className="rounded p-2 text-black w-60 h-40 lg:h-auto lg:w-96"
          name="bio"
          id="bio"
        />
        {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}

        <div className="flex items-center">
          <input
            {...register('isCertified')}
            className="rounded p-2 m-2 text-black"
            defaultChecked={technician.isCertified ? true : false}
            type="checkbox"
            name="isCertified"
            id="isCertified"
          />
          <label className="text-xl" htmlFor="isCertified">
            Electrician Is Certified?
          </label>
          {errors.isCertified && (
            <p className="text-red-500">{errors.isCertified.message}</p>
          )}
        </div>
        <div className="space-x-3">
          <GreenButton type="submit">Update</GreenButton>
          <RedButton onClick={() => handleDelete(technician.id)}>
            Delete
          </RedButton>
        </div>
      </form>
    </div>
  );
};

export default EditTechnicianCard;
