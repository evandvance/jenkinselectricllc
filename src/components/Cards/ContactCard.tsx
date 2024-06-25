'use client';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactFormData,
  contactFormSchema,
} from '@/interfaces/ContactFormSchema';

const ContactCard = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('name', data.name);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('comments', data.comments);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    const result = (await response.json()) as ApiResponse<undefined>;

    if (result.status !== 201) {
      return setError(true);
    }

    setSuccess(true);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col justify-center items-center w-[90%] p-5 border rounded-xl bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white lg:w-3/4 space-y-5"
      >
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
        <div className="flex flex-col w-3/4 space-y-2">
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            {...register('name')}
            className="rounded p-2 text-black"
            type="text"
            name="name"
            id="name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
          <label className="text-xl" htmlFor="comments">
            Comments
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
          className="flex justify-center text-2xl items-center m-5 h-16 w-56 bg-white text-black rounded-xl hover:bg-black hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>

      {error && (
        <div className="text-2xl lg:text-4xl text-red-500 text-center w-[90%] lg:w-3/4">
          <p>Something went wrong while submitting this form...</p>
        </div>
      )}

      {success && (
        <div className="text-2xl lg:text-4xl text-green-600 text-center w-[90%] lg:w-3/4">
          Thanks for reaching out! You will hear from us soon.
        </div>
      )}
    </>
  );
};

export default ContactCard;
