'use client';
import { useState, useEffect } from 'react';
import EditTechnicianCard from './AdminCards/EditTechnicianCard';
import { Technicians } from '@prisma/client';

const EditTechnicianDisply = () => {
  const [technicians, setTechnicians] = useState<Technicians[]>();

  useEffect(() => {
    fetch('/api/technicians').then(async (data) => {
      const result = await data.json();

      setTechnicians(result);
    });
  }, []);

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
          <EditTechnicianCard key={technician.id} technician={technician} />
        ))
      )}
    </div>
  );
};

export default EditTechnicianDisply;
