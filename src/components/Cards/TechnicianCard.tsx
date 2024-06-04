import Image from 'next/image';
import { FaAward } from 'react-icons/fa6';
interface TechnicianCardProps {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  bio: string;
  isCertified: boolean;
  imageUrl: string;
  index: number;
  key?: string;
}

const isEven = (index: number): boolean => {
  return index % 2 === 0;
};

const TechnicianCard = ({
  firstName,
  lastName,
  phoneNumber,
  bio,
  isCertified,
  imageUrl,
  index,
  key,
}: TechnicianCardProps) => {
  const gradient = isEven(index)
    ? 'bg-gradient-to-r from-jellcdarkblue to-jellcblue'
    : 'bg-gradient-to-r from-jellcorange to-jellcyellow lg:flex-row-reverse';

  return (
    <div
      className={`w-7/8 lg:w-3/4 m-5 p-5 border rounded-xl text-white flex flex-col lg:flex-row ${gradient}`}
      key={key}
    >
      <div className="w-full lg:min-w-1/2 flex justify-center items-center relative">
        <Image
          height={500}
          width={600}
          className="object-cotain w-full h-auto p-5"
          src={imageUrl}
          alt={`Image of ${firstName} ${lastName}`}
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <div className="text-5xl my-5 w-content flex lg:items-center">
          <h2 className="lg:mx-5">{`${firstName} ${lastName}`}</h2>
          {isCertified && (
            <div className="flex flex-col items-center">
              <FaAward className="text-7xl lg:mx-4" color="white" />
              <p className=" text-sm">Certified</p>
            </div>
          )}
        </div>
        <p className="text-xl lg:text-2xl m-5">{bio}</p>
      </div>
    </div>
  );
};

export default TechnicianCard;
