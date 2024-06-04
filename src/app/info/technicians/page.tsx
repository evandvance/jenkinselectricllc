'use client';
import { useState, useEffect } from 'react';
import TechnicianCard from '@/components/Cards/TechnicianCard';
import { Technician } from '@prisma/client';

const TechnicianPage = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);

  useEffect(() => {
    const response = fetch('https://jenkinselectric.llc/api/technicians');
    setTechnicians([
      {
        id: 0,
        firstName: 'Dakota',
        lastName: 'Jenkins',
        bio: 'Lorem Ipsum',
        isCertified: false,
        imageUrl: '/images/owners.jpg',
        phoneNumber: null,
      },
      {
        id: 0,
        firstName: 'Dakota',
        lastName: 'Jenkins',
        bio: 'Lorem Ipsum',
        isCertified: true,
        imageUrl: '/images/owners.jpg',
        phoneNumber: null,
      },
    ]);
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

export default TechnicianPage;
