'use client';
import { useState, Dispatch, SetStateAction } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';
import {
  applianceUploadFormSchema,
  ApplianceFormData,
} from '@/interfaces/ApplianceUploadFormSchema';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface ApplianceUploadFormProps {
  allAppliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
  isGenerator?: boolean;
}

const ApplianceUploadForm = ({
  allAppliances,
  setAppliances,
  isGenerator,
}: ApplianceUploadFormProps) => {
  const applianceAges = Object.keys(ApplianceAges);
  const applianceTypes = Object.keys(ApplianceTypes);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplianceFormData>({
    resolver: zodResolver(applianceUploadFormSchema),
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('applianceName', data.applianceName);
    formData.append('appliancePrice', data.appliancePrice);
    formData.append('modelNumber', data.modelNumber);
    formData.append('applianceType', data.type);
    formData.append('applianceAge', data.age);
    formData.append('applianceBrand', data.applianceBrand);
    formData.append('description', data.description);

    for (let i = 0; i < data.imageFile.length; i++) {
      formData.append('file', data.imageFile[i]);
    }

    const response = await fetch('/api/admin/appliances', {
      method: 'POST',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<appliaceInterface>;

    if (result.status !== 201) {
      return setError(true);
    }

    const newAppliance = result.data!;

    setSuccess(true);
    reset();
    setAppliances([...allAppliances, newAppliance]);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center w-[90%] p-5 lg:p-10 border rounded-xl border-jellcblue text-white bg-black lg:w-3/4 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full">
          <label className="text-xl" htmlFor="applianceName">
            {isGenerator ? 'Generator' : 'Appliance'} Name
          </label>
          <input
            {...register('applianceName')}
            className="rounded p-2 text-black"
            type="text"
            name="applianceName"
            id="applianceName"
          />
          {errors.applianceName && (
            <p className="text-red-500">{errors.applianceName.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xl" htmlFor="appliancePrice">
            {isGenerator ? 'Generator' : 'Appliance'} Price
          </label>
          <input
            {...register('appliancePrice', { valueAsNumber: true })}
            className="rounded p-2 text-black"
            type="number"
            step="0.01"
            name="appliancePrice"
            id="appliancePrice"
          />
          {errors.appliancePrice && (
            <p className="text-red-500">{errors.appliancePrice.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xl" htmlFor="modelNumber">
            Model Number
          </label>
          <input
            {...register('modelNumber')}
            className="rounded p-2 text-black"
            type="text"
            name="modelNumber"
            id="modelNumber"
          />
          {errors.modelNumber && (
            <p className="text-red-500">{errors.modelNumber.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xl" htmlFor="applianceBrand">
            {isGenerator ? 'Generator' : 'Appliance'} Brand
          </label>

          {isGenerator ? (
            <select
              {...register('applianceBrand')}
              name="applianceBrand"
              id="applianceBrand"
              className="p-1 text-black"
            >
              <option value=""></option>
              <option value="champion">Champion</option>
              <option value="duramax">Duramax</option>
              <option value="generac">Generac</option>
            </select>
          ) : (
            <input
              {...register('applianceBrand')}
              className="rounded p-2 text-black"
              type="text"
              name="applianceBrand"
              id="applianceBrand"
            />
          )}

          {errors.applianceBrand && (
            <p className="text-red-500">{errors.applianceBrand.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xl" htmlFor="description">
            {isGenerator ? 'Generator' : 'Appliance'} Description
          </label>
          <textarea
            {...register('description')}
            className="rounded p-2 text-black"
            name="description"
            id="description"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full space-y-2">
          <label className="text-xl" htmlFor="imageFile">
            Upload images
          </label>
          <input
            {...register('imageFile')}
            type="file"
            name="imageFile"
            id="imageFile"
            multiple
          />
          {errors.imageFile && <p className="text-red-500">File required</p>}
        </div>

        <div className="flex w-full flex-col space-y-5 lg:space-y-0 lg:flex-row text-black lg:space-x-4">
          {isGenerator ? (
            <input
              {...register('type')}
              name="type"
              id="type"
              type="hidden"
              value={'generator'}
            />
          ) : (
            <div className="flex flex-col w-full lg:w-1/2 space-y-2 text-black">
              <label htmlFor="type" className="text-white text-xl">
                {isGenerator ? 'Generator' : 'Appliance'} Type
              </label>
              <select
                {...register('type')}
                name="type"
                id="type"
                className="p-1"
              >
                <option value=""></option>
                {applianceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isGenerator ? (
            <input
              {...register('age')}
              name="age"
              id="age"
              type="hidden"
              value={'New'}
            />
          ) : (
            <div className="flex flex-col w-full lg:w-1/2 space-y-2 text-black">
              <label htmlFor="age" className="text-white text-xl">
                {isGenerator ? 'Generator' : 'Appliance'} Age
              </label>
              <select {...register('age')} name="age" id="age" className="p-1">
                <option value=""></option>
                {applianceAges.map((age) => (
                  <option key={age} value={age}>
                    {age.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <button
          className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white rounded-xl hover:bg-white hover:text-jellcblue"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-2xl">
          Error Something when wrong on the server
        </p>
      )}

      {success && (
        <p className="text-2xl text-green-600">
          {isGenerator ? 'Generator' : 'Appliance'} Uploaded Successfully
        </p>
      )}
    </>
  );
};

export default ApplianceUploadForm;
