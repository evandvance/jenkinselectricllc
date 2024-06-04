'use client';
import { useState, useEffect } from 'react';
import TechnicianCard from '@/components/Cards/TechnicianCard';
import { Technician } from '@prisma/client';

const TechnicianPage = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);

  useEffect(() => {
    setTechnicians([
      {
        id: 0,
        firstName: 'Dakota',
        lastName: 'Jenkins',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae sit, cum ea accusantium beatae modi fugiat, tenetur optio error eos. Odit libero officiis similique, iusto quisquam deserunt id reprehenderit!',
        isCertified: false,
        imageUrl: '/images/owners.jpg',
        phoneNumber: null,
      },
      {
        id: 0,
        firstName: 'Dakota',
        lastName: 'Jenkins',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae sit, cum ea accusantium beatae modi fugiat, tenetur optio error eos. Odit libero officiis similique, iusto quisquam deserunt id reprehenderit!',
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
