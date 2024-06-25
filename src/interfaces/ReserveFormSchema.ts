import { z } from 'zod';

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const reserveFormSchema = z.object({
  email: z.string().email(),
  comments: z.string(),
  firstName: z.string().min(1, { message: 'Must include a first name' }),
  lastName: z.string().min(1, { message: 'Must include a last name' }),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid Phone Number.'),
  street: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  state: z
    .string()
    .min(2, {
      message: 'State expected to be represented as an abreviation ex: TN',
    })
    .max(2),
  zip: z.string().regex(new RegExp(/^\d{5}$/), 'Invalid Zip Code'),
});

export type ReserveFormData = z.infer<typeof reserveFormSchema>;
