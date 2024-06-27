'use client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceListingCard from './AdminCards/ApplianceListingCard';
import { Dispatch, SetStateAction } from 'react';

interface ApplianceListingDisplayProps {
  appliances: appliaceInterface[];
  originalAppliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;

  setOriginalAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
}

const ApplianceListingDisplay = ({
  appliances,
  originalAppliances,
  setOriginalAppliances,
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
              originalAppliances={originalAppliances}
              setAppliances={setAppliances}
              setOriginalAppliances={setOriginalAppliances}
            />
          );
        })
      )}
    </div>
  );
};

export default ApplianceListingDisplay;
