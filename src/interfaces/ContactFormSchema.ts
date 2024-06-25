import { z } from 'zod';
import { phoneRegex } from './ReserveFormSchema';

export const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid Phone Number.'),
  comments: z.string().min(3).max(3000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
