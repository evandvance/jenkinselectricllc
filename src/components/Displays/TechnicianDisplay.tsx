'use client';
import { useState, useEffect } from 'react';
import TechnicianCard from '@/components/Cards/TechnicianCard';
import { Technicians } from '@prisma/client';

const TechnicianDisplay = () => {
  const [technicians, setTechnicians] = useState<Technicians[]>([]);

  useEffect(() => {
    fetch('/api/technicians', {
      cache: 'no-cache',
    }).then(async (data) => setTechnicians(await data.json()));
  }, []);

  if (technicians?.length === 0) {
    return (
      <div className="m-5 flex justify-center items-center">
        No Technicians Found
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {technicians?.map((technician, index) => {
        const { firstName, lastName, bio, isCertified, imageUrl } = technician;
        return (
          <TechnicianCard
            firstName={firstName}
            lastName={lastName}
            bio={bio}
            isCertified={isCertified}
            imageUrl={imageUrl}
            index={index}
            key={firstName + lastName}
          />
        );
      })}
    </div>
  );
};

export default TechnicianDisplay;
