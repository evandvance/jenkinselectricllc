'use client';
import { useEffect, useState } from 'react';
import BlueButton from '../Buttons/BlueButton';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import SimilarItemsCarousel from '../Carousels/SimilarItemsCarousel';
import ApplianceImagesCarousel from '../Carousels/ApplianceImagesCarousel';

interface AppliancePageDisplayProps {
  id: number;
}

const AppliancePageDisplay = ({ id }: AppliancePageDisplayProps) => {
  const [appliance, setAppliance] = useState<appliaceInterface>();
  const [noAppliance, setNoAppliance] = useState(true);

  useEffect(() => {
    fetch(`/api/appliances/${id}`, { cache: 'no-cache' }).then(async (data) => {
      const result = (await data.json()) as ApiResponse<appliaceInterface>;
      const applianceData = result.data;
      if (!applianceData) return;

      setAppliance(applianceData);
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
          <ApplianceImagesCarousel
            images={appliance!.images}
            applianceName={appliance?.applianceName}
          />
          <div className="w-full lg:w-3/4 p-5 flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="text-3xl mb-3 lg:w-1/3 flex flex-col items-center space-y-3">
              <div className="flex space-x-5">
                <h2>Price</h2>
                <h2 className="text-jellcblue">${appliance?.price}</h2>
              </div>

              {appliance?.reservation ? (
                <div className="text-3xl">Appliance Reserved</div>
              ) : (
                <BlueButton
                  href={`/appliances/reserve/${appliance?.id}`}
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

      <SimilarItemsCarousel type={appliance?.type} id={appliance?.id} />
    </div>
  );
};

export default AppliancePageDisplay;
