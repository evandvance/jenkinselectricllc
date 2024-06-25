'use client';
import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import {
  reserveFormSchema,
  ReserveFormData,
} from '@/interfaces/ReserveFormSchema';

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
  const [uploadError, setUploadError] = useState<ApiResponse<undefined>>();
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    fetch(`/api/appliances/${id}`).then(async (data) => {
      const result = (await data.json()) as ApiResponse<appliaceInterface>;

      if (result.status !== 200) return;
      setAppliance(result.data!);
    });
  }, [id]);

  const onSubmit = async (data: FieldValues) => {
    setIsloading(true);
    const formData = new FormData();

    formData.append('email', data.email);

    formData.append('comments', data.comments);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('street', data.street);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('zip', data.zip);

    const response = await fetch(`/api/appliances/reserve/${id}`, {
      method: 'POST',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<undefined>;
    setIsloading(false);

    if (result.status !== 201) {
      setUploadSuccess(false);
      return setUploadError(result);
    }

    setUploadSuccess(true);
  };

  return (
    <>
      {appliance ? (
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
              type="text"
              name="email"
              id="email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row w-3/4 space-y-2 lg:space-x-4 lg:space-y-0">
            <div className="flex flex-col w-1/2">
              <label className="text-xl" htmlFor="firstName">
                First Name
              </label>
              <input
                {...register('firstName')}
                className="rounded p-2 text-black"
                type="text"
                name="firstName"
                id="firstName"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xl" htmlFor="lastName">
                Last Name
              </label>
              <input
                {...register('lastName')}
                className="rounded p-2 text-black"
                type="text"
                name="lastName"
                id="lastName"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-3/4 space-y-2">
            <label className="text-xl" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              {...register('phoneNumber')}
              className="rounded p-2 text-black"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              pattern="
              /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col w-3/4 space-y-2">
            <label className="text-xl" htmlFor="street">
              Street
            </label>
            <input
              {...register('street')}
              className="rounded p-2 text-black"
              type="tel"
              name="street"
              id="street"
            />
            {errors.street && (
              <p className="text-red-500">{errors.street.message}</p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row w-3/4 space-y-2 lg:space-x-4 lg:space-y-0">
            <div className="flex flex-col w-1/2 space-y-2">
              <label className="text-xl" htmlFor="city">
                City
              </label>
              <input
                {...register('city')}
                className="rounded p-2 text-black"
                type="tel"
                name="city"
                id="city"
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
            <div className="flex flex-col w-1/2 space-y-2">
              <label className="text-xl" htmlFor="state">
                State
              </label>
              <input
                {...register('state')}
                className="rounded p-2 text-black"
                type="tel"
                name="state"
                id="state"
              />
              {errors.state && (
                <p className="text-red-500">{errors.state.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-3/4 space-y-2">
            <label className="text-xl" htmlFor="zip">
              Zip Code
            </label>
            <input
              {...register('zip')}
              className="rounded p-2 text-black"
              type="tel"
              name="zip"
              id="zip"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <div className="flex flex-col w-3/4 space-y-2">
            <label className="text-xl" htmlFor="comments">
              Comments (optional)
            </label>
            <textarea
              {...register('comments')}
              className="rounded p-2 text-black"
              name="comments"
              id="comments"
            />
            {errors.comments && (
              <p className="text-red-500">{errors.comments.message}</p>
            )}
          </div>

          <button
            className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-white text-black rounded-xl hover:bg-black hover:text-white "
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-5xl mt-2 text-red-500">
          {' '}
          Requested appliance not found
        </div>
      )}
      {isLoading && <p className="text-3xl text-jellcblue">Loading...</p>}

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
