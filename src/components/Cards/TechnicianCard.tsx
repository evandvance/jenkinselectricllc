import { FaAward } from 'react-icons/fa6';
interface TechnicianCardProps {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  bio: string;
  isCertified: boolean;
  imageUrl: string;
  index: number;
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
}: TechnicianCardProps) => {
  const gradient = isEven(index)
    ? 'bg-gradient-to-r from-jellcdarkblue to-jellcblue'
    : 'bg-gradient-to-l from-jellcyellow to-jellcorange';

  return (
    <div
      className={`w-[75vw] m-5 p-5 border rounded-xl text-white flex flex-col lg:flex-row ${gradient}`}
    >
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="h-[500px]"
          src={imageUrl}
          alt={`Image of ${firstName} ${lastName}`}
        />
        {isCertified && <FaAward color="white" height={50} />}
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-5xl m-5">{`${firstName} ${lastName}`}</h2>
        <p className="text-2xl m-5">{bio}</p>
      </div>
    </div>
  );
};

export default TechnicianCard;
