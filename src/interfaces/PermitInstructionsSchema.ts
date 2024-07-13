import { z } from 'zod';

export const PermitInstructionSchema = z.object({
  description: z.string().min(3).max(10000),
  image: z.any(),
});

export type PermitInstructionType = z.infer<typeof PermitInstructionSchema>;
