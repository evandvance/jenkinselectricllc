import { z } from 'zod';

export const VideoSchema = z.object({
  url: z.string(),
});

export type VideoType = z.infer<typeof VideoSchema>;
