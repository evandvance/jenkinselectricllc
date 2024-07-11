import { PermitInstructions, PermitVideo } from '@prisma/client';

export interface PermitInterface {
  url: PermitVideo;
  instructions: PermitInstructions[];
}
