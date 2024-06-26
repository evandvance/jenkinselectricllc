import { ApplianceImages, Generators, Reservations } from '@prisma/client';

export interface generatorsInterface extends Generators {
  images: ApplianceImages[];
  reservation?: Reservations;
}
