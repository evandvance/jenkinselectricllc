import Image from 'next/image';
import Link from 'next/link';
import BlueButton from '../Buttons/BlueButton';

interface ApplianceCardProps {
  applianceId: number;
  imageUrl: string;
  applianceName: String;
  price: number;
  model: string;
  stock: number;
}

const ApplianceCard = () => {
  const applianceID = 1;
  return (
    <div className="m-5 p-5 flex flex-col lg:flex-row items-center bg-slate-300 w-7/8 lg:w-3/4 border rounded-xl text-black">
      <Link
        href={`/appliances/${applianceID}`}
        className="w-[90%] lg:w-1/2 flex justify-center items-center relative"
      >
        <Image
          height={500}
          width={600}
          className="object-contain w-full h-auto p-5 "
          src={'/images/Washingmachine.webp'}
          alt={`Image of ${'Placeholder'}`}
        />
      </Link>

      <div className="flex flex-col lg:space-y-4 lg:w-1/2">
        <div className="flex flex-col justify-between m-5 space-y-4 lg:space-y-10 lg:ml-24">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl">Appliance Name</h2>
            <h3 className="text-3xl lg:text-4xl text-jellcblue">$1234.00</h3>
          </div>
          <div className="text-lg">
            <p>Model: 123456789</p>
            <p>4 Left in Stock</p>
          </div>
        </div>
        <Link
          className="text-jellcblue hover:underline text-lg mx-5 lg:ml-24 "
          href={`/appliances/${applianceID}`}
        >
          More details...
        </Link>
        <div className="lg:w-full lg:flex lg:items-center lg:justify-center">
          <BlueButton href="/" title="Reserve Now" />
        </div>
      </div>
    </div>
  );
};

export default ApplianceCard;
