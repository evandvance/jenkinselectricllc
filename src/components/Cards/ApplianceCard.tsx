import Image from 'next/image';
import Link from 'next/link';
import BlueButton from '../Buttons/BlueButton';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface ApplianceCardProps {
  appliance: appliaceInterface;
}

const ApplianceCard = ({ appliance }: ApplianceCardProps) => {
  return (
    <div className="m-5 p-5 flex flex-col lg:flex-row items-center bg-slate-300 w-[85vw] lg:w-3/4 border rounded-xl text-black">
      <Link
        href={`/appliances/${appliance.id}`}
        className="w-[90%] lg:w-1/2 flex justify-center items-center relative"
      >
        <Image
          height={500}
          width={600}
          className="object-contain w-full h-auto p-5 "
          src={appliance.images[0].imageUrl}
          alt={`Image of ${appliance.applianceName}`}
        />
      </Link>

      <div className="flex flex-col lg:space-y-4 lg:w-1/2">
        <div className="flex flex-col justify-between m-5 space-y-4 lg:space-y-10 lg:ml-24">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl">{appliance.applianceName}</h2>
            <h3 className="text-3xl lg:text-4xl text-jellcblue">
              ${appliance.price}
            </h3>
          </div>
          <div className="text-lg">
            <p>Model: {appliance.modelNumber}</p>
            <p>{appliance.brand}</p>
          </div>
        </div>
        <Link
          className="text-jellcblue hover:underline text-lg mx-5 lg:ml-24 "
          href={`/appliances/${appliance.id}`}
        >
          More details...
        </Link>
        <div className="w-full flex items-center justify-center">
          <BlueButton
            href={`/appliances/reserve/${appliance.id}`}
            title="Reserve Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplianceCard;
