import React from 'react';
import { Appliances, Reservations } from '@prisma/client';
interface EmployeeContactProps {
  appliance: Appliances;
  reservation: Reservations;
}

const EmployeeContact = ({ appliance, reservation }: EmployeeContactProps) => {
  return <div>EmployeeContact</div>;
};

export default EmployeeContact;
