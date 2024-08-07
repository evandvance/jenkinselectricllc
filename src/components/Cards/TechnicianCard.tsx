import Image from 'next/image';
import { FaAward } from 'react-icons/fa6';
import { Technicians } from '@prisma/client';
import FadeIn from '../Utilities/FadeIn';

interface TechnicianCardProps {
  technician: Technicians;
  index?: number;
}

const isEven = (index: number): boolean => {
  return index % 2 === 0;
};

const TechnicianCard = ({ technician, index }: TechnicianCardProps) => {
  const gradient = isEven(index!)
    ? 'bg-gradient-to-r from-jellcdarkblue to-jellcblue'
    : 'bg-gradient-to-r from-jellcorange to-jellcyellow lg:flex-row-reverse';

  return (
    <FadeIn>
      <div
        className={`w-[85vw] lg:w-[75vw] m-5 p-5 border rounded-xl text-white flex flex-col lg:flex-row ${gradient}`}
      >
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            height={500}
            width={500}
            className="object-cotain w-full h-auto lg:w-[500px] lg:h-[500px] p-5 rounded"
            src={technician.imageUrl}
            alt={`Image of ${technician.firstName} ${technician.lastName}`}
          />
        </div>
        <div className="flex flex-col justify-center items-start lg:w-1/2">
          <div className="text-5xl m-5 flex justify-between lg:items-center">
            <h2 className="lg:mx-5">{`${technician.firstName} ${technician.lastName}`}</h2>
            {technician.isCertified && (
              <div className="flex flex-col items-center">
                <FaAward className="text-7xl lg:mx-4" color="white" />
                <p className=" text-sm">Certified</p>
              </div>
            )}
          </div>
          <p className="text-xl lg:text-2xl m-5">{technician.bio}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default TechnicianCard;
