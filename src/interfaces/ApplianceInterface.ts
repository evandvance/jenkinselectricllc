import { Appliances, ApplianceImages } from '@prisma/client';

export interface appliaceInterface extends Appliances {
  images: ApplianceImages[];
}
