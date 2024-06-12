'use client';
import Image from 'next/image';
import BlueButton from '@/components/Buttons/BlueButton';

interface ApplianceProps {
  params: { id: string[] };
}

const page = ({ params: { id } }: ApplianceProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="w-screen flex">
        <h1 className="text-5xl m-5 lg:ml-24">Appliance Name</h1>
      </div>
      <div>
        <div className="w-[90%] flex justify-center items-center relative">
          <Image
            height={500}
            width={600}
            className="object-contain w-full h-auto p-5 "
            src={'/images/Washingmachine.webp'}
            alt={`Image of ${'Placeholder'}`}
          />
        </div>
        <div className="h-24">This is where the carousel will go </div>
      </div>
      <div className="w-full lg:w-1/2 p-5 flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="text-3xl mb-3 lg:w-1/3 flex flex-col items-center space-y-2">
          <h2>Price</h2>
          <h2 className="text-jellcblue">$1234.56</h2>
          <BlueButton href="/" title="Reserve Now!" />
          <h2 className="hidden lg:static text-2xl">Only 3 left in stock!</h2>
        </div>
        <div className="h-full m-5 space-y-2 justify-between">
          <h2 className="text-4xl">Details</h2>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsum
            eligendi quaerat, dolorem et fugit assumenda hic iure voluptatibus,
            dolorum veritatis eius sunt facilis adipisci itaque possimus
            corrupti. Aut, animi.
          </p>
        </div>
      </div>

      <div className="h-24">This is where the carousel will go </div>
    </div>
  );
};

export default page;
