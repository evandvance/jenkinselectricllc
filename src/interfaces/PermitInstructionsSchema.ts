import { z } from 'zod';

export const PermitInstructionSchema = z.object({
  description: z.string().min(3).max(10000),
  image:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length >= 1, 'File is required.'),
});

export type PermitInstructionType = z.infer<typeof PermitInstructionSchema>;
