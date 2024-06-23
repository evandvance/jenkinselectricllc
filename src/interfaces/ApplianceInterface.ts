import {
  Appliances,
  ApplianceImages,
  Reservations,
  ApplianceTypes,
} from '@prisma/client';

export interface appliaceInterface extends Appliances {
  images: ApplianceImages[];
  reservation?: Reservations;
}

export function isApplianceType(type: any): boolean {
  return Object.keys(ApplianceTypes).includes(type!);
}
