import Image from 'next/image';
import Link from 'next/link';
import BlueButton from '../Buttons/BlueButton';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface ApplianceCardProps {
  appliance: appliaceInterface;
}

const ApplianceCard = ({ appliance }: ApplianceCardProps) => {
  return (
    <div className="m-3 p-10 flex flex-col justify-between items-center bg-slate-300 text-black border rounded max-w-[90%]">
      <Link href={`/appliances/${appliance.id}`} className="w-full h-1/2">
        <Image
          height={350}
          width={350}
          className="object-contain w-full h-auto rounded"
          src={
            process.env.NODE_ENV === 'development'
              ? '/images/example_image.webp'
              : appliance.images[0].imageUrl
          }
          alt={`Image of ${appliance.applianceName}`}
        />
      </Link>

      <div className="flex flex-col w-[350px] p-5 h-1/2 justify-end">
        <div className="flex flex-col justify-between items-center space-y-4">
          <h2 className="text-4xl ">{appliance.applianceName}</h2>
          <h3 className="text-3xl  text-jellcblue">${appliance.price}</h3>
        </div>
        <div className="text-lg">
          <p>Model: {appliance.modelNumber}</p>
          <p>{appliance.brand}</p>
          <p>{appliance.type.toUpperCase()}</p>
        </div>
        <Link
          className="text-jellcblue hover:underline text-lg "
          href={`/appliances/${appliance.id}`}
        >
          More details...
        </Link>
        <div className="w-full flex items-center justify-center">
          {appliance.reservation ? (
            <div className="text-4xl">Appliance Reserved.</div>
          ) : (
            <BlueButton
              href={`/appliances/reserve/${appliance.id}`}
              title="Reserve Now"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplianceCard;
