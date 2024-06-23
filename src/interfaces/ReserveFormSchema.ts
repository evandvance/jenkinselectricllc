import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const reserveFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid Phone Number.'),
  comments: z.string(),
  street: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  state: z.string().min(2).max(2),
  zip: z.string().regex(new RegExp(/^\d{5}$/), 'Invalid Zip Code'),
});

export type ReserveFormData = z.infer<typeof reserveFormSchema>;
