import { z } from 'zod';

//TODO This is not dry since it is repeated in the schema but i dont have time to fix it
export const applianceTypes: [string, ...string[]] = [
  'washer',
  'dryer',
  'dishwasher',
  'fridge',
  'freezer',
  'microwave',
  'stove',
  'windowacunit',
  'icemaker',
  'industrial',
  'dryerwashersets',
  'other',
];

export const applianceAges: [string, ...string[]] = ['New', 'Used'];

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
  age: z.enum(applianceAges),
  type: z.enum(applianceTypes),
  imageFile:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length >= 1, 'File is required.'),
});

export type ApplianceFormData = z.infer<typeof applianceUploadFormSchema>;
