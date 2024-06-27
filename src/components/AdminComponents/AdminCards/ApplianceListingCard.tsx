'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, Dispatch, SetStateAction } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';
import { FieldValues } from 'react-hook-form';
import {
  EditApplianceFormData,
  updateApplianceFormSchema,
} from '@/interfaces/ApplianceUploadFormSchema';
import { ApplianceTypes, ApplianceAges } from '@prisma/client';

interface ApplianceListingCardProps {
  appliance: appliaceInterface;
  allAppliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
}

const ApplianceListingCard = ({
  appliance,
  allAppliances,
  setAppliances,
}: ApplianceListingCardProps) => {
  const applianceAges = Object.keys(ApplianceAges);
  const applianceTypes = Object.keys(ApplianceTypes);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditApplianceFormData>({
    resolver: zodResolver(updateApplianceFormSchema),
  });

  const handleDelete = async () => {
    const oldAppliances = allAppliances;
    setAppliances(allAppliances.filter((app) => app.id !== appliance.id));
    const response = await fetch(`/api/admin/appliances/${appliance.id}`, {
      method: 'DELETE',
    });
    const data = (await response.json()) as ApiResponse<undefined>;

    if (data.status !== 204) {
      setAppliances(oldAppliances);
    }
  };

  const handleUnreserve = async () => {
    const oldAppliances = structuredClone(allAppliances);
    const updatedAppliance: appliaceInterface = {
      ...appliance,
      reservation: undefined,
    };

    setAppliances([
      ...allAppliances.filter((app) => app.id !== appliance.id),
      updatedAppliance,
    ]);

    const result = await fetch(`/api/admin/appliances/${appliance.id}`, {
      method: 'PATCH',
    });

    const data = (await result.json()) as ApiResponse<undefined>;

    if (data.status !== 200) {
      setAppliances(oldAppliances);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const updatedAppliance: appliaceInterface = {
      applianceName: data.applianceName,
      price: data.appliancePrice,
      brand: data.applianceBrand,
      modelNumber: data.modelNumber,
      description: data.description,
      age: data.age,
      type: data.type,
      id: appliance.id,
      images: appliance.images,
    };

    const oldAppliances = structuredClone(allAppliances);

    setAppliances([
      ...allAppliances.filter((app) => app.id !== appliance.id),
      updatedAppliance,
    ]);

    const formData = new FormData();

    formData.append('applianceName', updatedAppliance.applianceName);
    formData.append('appliancePrice', updatedAppliance.price.toString());
    formData.append('applianceBrand', updatedAppliance.brand);
    formData.append('modelNumber', updatedAppliance.modelNumber);
    formData.append('description', updatedAppliance.description);
    formData.append('age', updatedAppliance.age);
    formData.append('type', updatedAppliance.type);

    const response = await fetch(`/api/admin/appliances/${appliance.id}`, {
      method: 'PUT',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<appliaceInterface>;

    console.log(result);
    if (result.status !== 200) {
      setAppliances(oldAppliances);
      return setError(true);
    }

    setSuccess(true);
  };

  return (
    <div className="w-[85vw]  bg-slate-300 rounded-xl flex flex-wrap p-5 items-center justify-between">
      {error && (
        <p className="text-red-500 text-2xl text-center w-full px-5 m-2">
          Error - Something when wrong on the server
        </p>
      )}

      {success && (
        <p className="text-2xl text-center w-full px-5 text-green-600 m-2">
          Appliance Updated Successfully
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col flex-wrap space-y-3 lg:flex-row p-3 lg:px-8 items-center justify-between"
      >
        <div className="flex flex-col justify-center flex-wrap items-center lg:flex-row space-y-3 lg:space-x-4 lg:space-y-0">
          <input
            {...register('applianceName')}
            defaultValue={appliance.applianceName}
            className="rounded p-2 m-2 text-black w-60"
            type="text"
            name="applianceName"
            id="applianceName"
          />
          {errors.applianceName && (
            <p className="text-red-500">{errors.applianceName.message}</p>
          )}

          <input
            {...register('appliancePrice', { valueAsNumber: true })}
            defaultValue={appliance.price}
            className="rounded p-2 m-2 text-black w-60"
            type="text"
            name="appliancePrice"
            id="appliancePrice"
          />
          {errors.appliancePrice && (
            <p className="text-red-500">{errors.appliancePrice.message}</p>
          )}
          <input
            {...register('modelNumber')}
            defaultValue={appliance.modelNumber}
            className="rounded p-2 m-2 text-black w-60"
            type="text"
            name="modelNumber"
            id="modelNumber"
          />
          {errors.modelNumber && (
            <p className="text-red-500">{errors.modelNumber.message}</p>
          )}
          <input
            {...register('applianceBrand')}
            defaultValue={appliance.brand}
            className="rounded p-2 m-2 text-black w-60"
            type="text"
            name="applianceBrand"
            id="applianceBrand"
          />
          {errors.applianceBrand && (
            <p className="text-red-500">{errors.applianceBrand.message}</p>
          )}
          <div className="w-full">
            <select
              {...register('type')}
              defaultValue={appliance.type}
              name="type"
              id="type"
              className="p-1 w-full m-2"
            >
              <option value=""></option>
              {applianceTypes.map((type) => (
                <option key={type} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <select
              {...register('age')}
              defaultValue={appliance.age}
              name="age"
              id="age"
              className="p-1 w-full m-2"
            >
              <option value=""></option>
              {applianceAges.map((age) => (
                <option key={age} value={age}>
                  {age.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <textarea
          {...register('description')}
          defaultValue={appliance.description}
          className="rounded p-2 text-black w-60 h-40 lg:h-auto lg:w-96"
          name="description"
          id="description"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="space-x-3">
          {appliance.reservation && (
            <GreenButton onClick={handleUnreserve}>Unreserve</GreenButton>
          )}
          <GreenButton type="submit">Update</GreenButton>
          <RedButton onClick={handleDelete}>Delete</RedButton>
        </div>
      </form>
    </div>
  );
};

export default ApplianceListingCard;
