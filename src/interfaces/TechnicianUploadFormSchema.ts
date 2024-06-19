import { z } from 'zod';

export const technicianFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  bio: z.string().min(3),
  isCertified: z.boolean(),
  image:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length >= 1, 'File is required.'),
});

export type TechnicianFormData = z.infer<typeof technicianFormSchema>;
