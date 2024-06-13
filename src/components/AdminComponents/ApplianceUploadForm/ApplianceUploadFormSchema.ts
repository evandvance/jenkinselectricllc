import { z } from 'zod';

export const applianceUploadFormSchema = z.object({
  applianceName: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' }),
  appliancePrice: z
    .number({ message: 'Price must be numeric' })
    .min(0)
    .max(100000),
  modelNumber: z
    .string()
    .min(3, { message: 'Model Number must be at least 3 characters' }),
  imageFile:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length >= 1, 'File is required.'),
});

export type ApplianceFormData = z.infer<typeof applianceUploadFormSchema>;
