'use client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceListingCard from './AdminCards/ApplianceListingCard';
import { Dispatch, SetStateAction } from 'react';

interface ApplianceListingDisplayProps {
  appliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
}

const ApplianceListingDisplay = ({
  appliances,
  setAppliances,
}: ApplianceListingDisplayProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-3">
      {appliances.length === 0 ? (
        <div className="flex flex-col justify-center items-center m-5 text-2xl">
          <p>No Appliances Found</p>
        </div>
      ) : (
        appliances.map((appliance) => {
          return (
            <ApplianceListingCard
              key={appliance.id}
              appliance={appliance}
              allAppliances={appliances}
              setAppliances={setAppliances}
            />
          );
        })
      )}
    </div>
  );
};

export default ApplianceListingDisplay;
