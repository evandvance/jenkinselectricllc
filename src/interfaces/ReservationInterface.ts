import { Appliances, Reservations } from '@prisma/client';

export interface ReservationInterface extends Reservations {
  appliance: Appliances;
}
