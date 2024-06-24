import { Appliances, Reservations } from '@prisma/client';
import React from 'react';

interface ApplianceReservedProps {
  appliance: Appliances;
  reservation: Reservations;
}

const ApplianceReserved = ({
  appliance,
  reservation,
}: ApplianceReservedProps) => {
  return <div>ApplianceReserved</div>;
};

export default ApplianceReserved;
