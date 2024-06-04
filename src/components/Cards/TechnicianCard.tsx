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
    : 'bg-gradient-to-l from-jellcyellow to-jellcorange flex-row-reverse';

  return (
    <div
      className={`w-5/6 lg:w-3/4 m-5 p-5 border rounded-xl text-white flex flex-col lg:flex-row ${gradient}`}
      key={key}
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          width={400}
          height={500}
          src={imageUrl}
          alt={`Image of ${firstName} ${lastName}`}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <div className="text-5xl my-5 flex">
          <h2 className="lg:mx-4">{`${firstName} ${lastName}`}</h2>
          {isCertified && (
            <FaAward className="text-7xl lg:mx-4" color="white" />
          )}
        </div>
        <p className="text-2xl my-5">{bio}</p>
      </div>
    </div>
  );
};

export default TechnicianCard;
