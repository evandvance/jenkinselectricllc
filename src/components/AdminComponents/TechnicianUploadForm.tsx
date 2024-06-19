'use client';
import { useState, Dispatch, SetStateAction } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TechnicianFormData,
  technicianFormSchema,
} from '@/interfaces/TechnicianUploadFormSchema';
import { Technicians } from '@prisma/client';

interface TechnicianUploadFormProps {
  technicians?: Technicians[];
  setTechnicians: Dispatch<SetStateAction<Technicians[] | undefined>>;
}

const TechnicianUploadForm = ({
  technicians,
  setTechnicians,
}: TechnicianUploadFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TechnicianFormData>({
    resolver: zodResolver(technicianFormSchema),
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('bio', data.bio);
    formData.append('isCertified', data.isCertified);
    formData.append('image', data.image[0]);

    const response = await fetch('/api/admin/technicians', {
      method: 'POST',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<Technicians>;

    if (result.status !== 201) {
      return setError(true);
    }

    const newTechnician = result.data;

    setTechnicians([...technicians!, newTechnician!]);
    setSuccess(true);
  };

  return (
    <>
      <form
        className="flex m-5 flex-col justify-center items-center w-[90%] p-5 border rounded-xl border-jellcblue text-white bg-black lg:w-3/4 space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl m-2">Technician Upload</h2>
        <div className="flex w-3/4 flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-around">
          <div className="w-1/2 lg:space-x-4">
            <label className="text-xl" htmlFor="firstName">
              First Name
            </label>
            <input
              {...register('firstName')}
              className="rounded p-2 text-black w-60"
              type="text"
              name="firstName"
              id="firstName"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-1/2 lg:space-x-4">
            <label className="text-xl" htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register('lastName')}
              className="rounded p-2 text-black w-60"
              type="text"
              name="lastName"
              id="lastName"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="bio">
            Bio
          </label>
          <textarea
            {...register('bio')}
            className="rounded p-2 text-black"
            name="bio"
            id="bio"
          />
          {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
        </div>

        <div className="flex w-3/4 items-center">
          <input
            {...register('isCertified')}
            className="rounded p-2 m-2 text-black"
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
        <div className="flex flex-col w-3/4 space-y-2">
          <label className="text-xl" htmlFor="image">
            Upload image
          </label>
          <input {...register('image')} type="file" name="image" id="image" />
          {errors.image && <p className="text-red-500">File required</p>}
        </div>
        <button
          className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white rounded-xl hover:bg-white hover:text-jellcblue"
          type="submit"
        >
          Submit
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-2xl m-2">
          Error Something when wrong on the server -- Potentially Duplicate
          Technicians
        </p>
      )}

      {success && (
        <p className="text-2xl text-green-600 m-2">
          Technician Uploaded Successfully
        </p>
      )}
    </>
  );
};

export default TechnicianUploadForm;
