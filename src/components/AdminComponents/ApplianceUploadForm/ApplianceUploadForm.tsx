'use client';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  applianceUploadFormSchema,
  ApplianceFormData,
  applianceTypes,
  applianceAges,
} from './ApplianceUploadFormSchema';

const ApplianceUploadForm = () => {
  const {
    register,
    handleSubmit,
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

    const result = await response.json();

    if (result.status !== 200) {
      return setError(true);
    }

    window.location.reload();
    setSuccess(true);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center w-[90%] p-5 border rounded-xl border-jellcblue text-white bg-black lg:w-3/4 space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="applianceName">
            Appliance Name
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
        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="appliancePrice">
            Appliance Price
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
        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="modelNumber">
            Model Number
          </label>
          <input
            {...register('modelNumber')}
            className="rounded p-2 text-black"
            type="nuber"
            name="modelNumber"
            id="modelNumber"
          />
          {errors.modelNumber && (
            <p className="text-red-500">{errors.modelNumber.message}</p>
          )}
        </div>
        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="applianceBrand">
            Appliance Brand
          </label>
          <input
            {...register('applianceBrand')}
            className="rounded p-2 text-black"
            type="text"
            name="applianceBrand"
            id="applianceBrand"
          />
          {errors.applianceBrand && (
            <p className="text-red-500">{errors.applianceBrand.message}</p>
          )}
        </div>
        <div className="flex flex-col w-3/4">
          <label className="text-xl" htmlFor="description">
            Appliance Name
          </label>
          <input
            {...register('description')}
            className="rounded p-2 text-black"
            type="text-area"
            name="description"
            id="description"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col w-3/4 space-y-2">
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

        <div className="flex flex-col w-3/4 space-y-2 text-black">
          <label htmlFor="type" className="text-white text-xl">
            Appliance Type
          </label>
          <select {...register('type')} name="type" id="type" className="p-1">
            <option value=""></option>
            {applianceTypes.map((type) => (
              <option key={type} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-3/4 space-y-2 text-black">
          <label htmlFor="age" className="text-white text-xl">
            Appliance Age
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
        <button
          className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white rounded-xl hover:bg-white hover:text-jellcblue "
          type="submit"
        >
          Submit
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-2xl">
          Error Something when wrong on the server -- Potentially duplicate file
          uploads
        </p>
      )}

      {success && (
        <p className="text-2xl text-green-600">
          Appliance Uploaded Successfully
        </p>
      )}
    </>
  );
};

export default ApplianceUploadForm;
