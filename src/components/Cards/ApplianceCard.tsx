import Image from 'next/image';
import Link from 'next/link';
import BlueButton from '../Buttons/BlueButton';

interface ApplianceCardProps {
  applianceId: number;
  imageUrl: string;
  applianceName: String;
  price: number;
  modelNumber: string;
  type: string;
}

const ApplianceCard = ({
  applianceId,
  imageUrl,
  applianceName,
  price,
  modelNumber,
  type,
}: ApplianceCardProps) => {
  return (
    <div className="m-5 p-5 flex flex-col lg:flex-row items-center bg-slate-300 w-7/8 lg:w-3/4 border rounded-xl text-black">
      <Link
        href={`/appliances/${applianceId}`}
        className="w-[90%] lg:w-1/2 flex justify-center items-center relative"
      >
        <Image
          height={500}
          width={600}
          className="object-contain w-full h-auto p-5 "
          src={imageUrl}
          alt={`Image of ${applianceName}`}
        />
      </Link>

      <div className="flex flex-col lg:space-y-4 lg:w-1/2">
        <div className="flex flex-col justify-between m-5 space-y-4 lg:space-y-10 lg:ml-24">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl">{applianceName}</h2>
            <h3 className="text-3xl lg:text-4xl text-jellcblue">${price}</h3>
          </div>
          <div className="text-lg">
            <p>Model: {modelNumber}</p>
            <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        </div>
        <Link
          className="text-jellcblue hover:underline text-lg mx-5 lg:ml-24 "
          href={`/appliances/${applianceId}`}
        >
          More details...
        </Link>
        <div className="lg:w-full lg:flex lg:items-center lg:justify-center">
          <BlueButton
            href={`/appliances/reserve?id=${applianceId}`}
            title="Reserve Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplianceCard;
