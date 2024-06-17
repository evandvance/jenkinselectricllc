'use client';
import { useState, useEffect } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface ReserveCardProps {
  id: number;
}

const reserveFormSchema = z.object({
  email: z.string().email(),
  comments: z.string(),
});

export type ReserveFormData = z.infer<typeof reserveFormSchema>;

const ReserveCard = ({ id }: ReserveCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveFormData>({ resolver: zodResolver(reserveFormSchema) });
  const [appliance, setAppliance] = useState<appliaceInterface>();

  useEffect(() => {
    fetch(`/api/appliances/${id}`).then(async (data) => {
      const result = await data.json();

      setAppliance(result);
    });
  });

  return (
    <>
      <form
        action=""
        className="mt-5 flex flex-col justify-center items-center w-[90%] p-5 border rounded-xl bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white lg:w-3/4 space-y-5"
      >
        <h2 className="text-3xl">Reserve {appliance?.applianceName}</h2>
        <div className="flex flex-col w-3/4">
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
        <div className="flex flex-col w-3/4">
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
    </>
  );
};

export default ReserveCard;
