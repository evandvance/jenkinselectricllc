'use client';

import TechnicianCard from '@/components/Cards/TechnicianCard';
import { Technician } from '@prisma/client';

const TechnicianPage = async () => {
  // const response = await fetch('https://jenkinselectric.llc/api/technician');

  // if (response.status !== 200)
  //   return (
  //     <div className="m-5 flex justify-center items-center">
  //       No Technicians Found
  //     </div>
  //   );

  return (
    <div className="m-5 flex justify-center items-center">
      No Technicians Found
    </div>
  );
  // const technicians: Technician[] = await response.json();
  // return (
  //   <div className="flex flex-col justify-center items-center">
  //     {technicians.map((technician, index) => {
  //       const { firstName, lastName, bio, isCertified, imageUrl } = technician;
  //       return (
  //         <TechnicianCard
  //           firstName={firstName}
  //           lastName={lastName}
  //           bio={bio}
  //           isCertified={isCertified}
  //           imageUrl={imageUrl}
  //           index={index}
  //           key={firstName + lastName}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};

export default TechnicianPage;
