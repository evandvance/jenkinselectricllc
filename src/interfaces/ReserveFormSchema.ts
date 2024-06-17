import { z } from 'zod';

export const reserveFormSchema = z.object({
  email: z.string().email(),
  comments: z.string(),
});

export type ReserveFormData = z.infer<typeof reserveFormSchema>;
