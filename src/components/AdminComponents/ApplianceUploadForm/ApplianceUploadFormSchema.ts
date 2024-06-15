import { z } from 'zod';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';

export const applianceUploadFormSchema = z.object({
  applianceName: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' }),
  appliancePrice: z
    .number({ message: 'Price must be numeric' })
    .min(0)
    .max(100000),
  applianceBrand: z.string().min(3, {
    message:
      'Brand must be at least 3 characters -- contact dev team if this causes issues',
  }),
  description: z.string(),
  modelNumber: z
    .string()
    .min(3, { message: 'Model Number must be at least 3 characters' }),
  age: z.enum(Object.create(ApplianceAges)),
  type: z.enum(Object.create(ApplianceTypes)),
  imageFile:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length >= 1, 'File is required.'),
});

export type ApplianceFormData = z.infer<typeof applianceUploadFormSchema>;
