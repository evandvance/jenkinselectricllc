import { Appliances, ApplianceImages, Reservations } from '@prisma/client';

export interface appliaceInterface extends Appliances {
  images: ApplianceImages[];
  reservation: Reservations;
}
