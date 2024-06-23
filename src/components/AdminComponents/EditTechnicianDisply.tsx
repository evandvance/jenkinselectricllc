'use client';
import { Technicians } from '@prisma/client';
import EditTechnicianCard from './AdminCards/EditTechnicianCard';
import { Dispatch, SetStateAction } from 'react';

interface EditTechnicianDisplayProps {
  technicians?: Technicians[];
  setTechnicians: Dispatch<SetStateAction<Technicians[] | undefined>>;
}

const EditTechnicianDisply = ({
  technicians,
  setTechnicians,
}: EditTechnicianDisplayProps) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center space-y-4 mb-5">
      <h2 className="text-3xl">Technicians listed</h2>
      <h2 className="text-3xl text-red-500 text-center">
        WARNING! There is no confirm for deletions or updates yet
      </h2>
      {technicians?.length == 0 ? (
        <div>No technicians found</div>
      ) : (
        technicians?.map((technician) => (
          <EditTechnicianCard
            key={technician.id}
            allTechnicians={technicians}
            technician={technician}
            setTechnicians={setTechnicians}
          />
        ))
      )}
    </div>
  );
};

export default EditTechnicianDisply;
