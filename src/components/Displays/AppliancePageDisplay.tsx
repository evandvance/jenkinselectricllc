'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BlueButton from '../Buttons/BlueButton';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface AppliancePageDisplayProps {
  id: number;
}

const AppliancePageDisplay = ({ id }: AppliancePageDisplayProps) => {
  const [appliance, setAppliance] = useState<appliaceInterface>();
  const [noAppliance, setNoAppliance] = useState(true);

  useEffect(() => {
    fetch(`/api/appliances/${id}`, { cache: 'no-cache' }).then(async (data) => {
      const result = await data.json();
      setAppliance(result);
      setNoAppliance(false);
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {noAppliance ? (
        <h1 className="text-5xl">No appliance found</h1>
      ) : (
        <>
          <div className="w-screen flex">
            <h1 className="text-5xl m-5 lg:ml-24">
              {appliance?.applianceName}
            </h1>
          </div>
          <div>
            <div className="w-[90%] flex justify-center items-center relative">
              <Image
                height={500}
                width={600}
                className="object-contain w-full h-auto p-5 "
                src={appliance?.images[0].imageUrl!}
                alt={`Image of ${appliance?.applianceName}`}
              />
            </div>
            <div className="h-24">This is where the carousel will go </div>
          </div>
          <div className="w-full lg:w-1/2 p-5 flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="text-3xl mb-3 lg:w-1/3 flex flex-col items-center space-y-2">
              <h2>Price</h2>
              <h2 className="text-jellcblue">${appliance?.price}</h2>
              {appliance?.reservation ? (
                <div className="text-3xl">Appliance Reserved</div>
              ) : (
                <BlueButton
                  href={`/api/appliances/reserve/${appliance?.id}`}
                  title="Reserve Now!"
                />
              )}

              <h2 className="hidden lg:static text-2xl">{appliance?.brand}</h2>
            </div>
            <div className="h-full m-5 space-y-2 justify-between">
              <h2 className="text-4xl">Details</h2>
              <p className="text-lg">{appliance?.description}</p>
            </div>
          </div>
        </>
      )}

      <div className="h-24">
        This is where the Similar Appliances carousel will go
      </div>
    </div>
  );
};

export default AppliancePageDisplay;
