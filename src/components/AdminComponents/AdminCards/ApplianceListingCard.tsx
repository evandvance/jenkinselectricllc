'use client';
import { Dispatch, SetStateAction } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';

interface ApplianceListingCardProps {
  appliance: appliaceInterface;
  allAppliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
}

const ApplianceListingCard = ({
  appliance,
  allAppliances,
  setAppliances,
}: ApplianceListingCardProps) => {
  const handleDelete = async () => {
    const oldAppliances = allAppliances;
    setAppliances(allAppliances.filter((app) => app.id !== appliance.id));
    const response = await fetch(`/api/admin/appliances/${appliance.id}`, {
      method: 'DELETE',
    });
    const data = (await response.json()) as ApiResponse<undefined>;

    if (data.status !== 204) {
      setAppliances(oldAppliances);
    }
  };

  const handleUnreserve = async () => {
    const oldAppliances = allAppliances;
    const updatedAppliance: appliaceInterface = {
      ...appliance,
      reservation: undefined,
    };

    setAppliances([
      ...allAppliances.filter((app) => app.id !== appliance.id),
      updatedAppliance,
    ]);

    const result = await fetch(`/api/admin/appliances/${appliance.id}`, {
      method: 'PATCH',
    });

    const data = (await result.json()) as ApiResponse<undefined>;

    if (data.status !== 200) {
      setAppliances(oldAppliances);
    }
  };

  return (
    <div className="w-[85vw]  bg-slate-300 rounded-xl flex flex-wrap p-5 items-center justify-between">
      <h2>{appliance.applianceName}</h2>
      <div className="flex space-x-3">
        <p>{appliance.modelNumber}</p>
        <p>${appliance.price}</p>
        <p>{appliance.type}</p>
        <p>id: {appliance.id}</p>
      </div>
      <div className="space-x-2">
        {appliance.reservation && (
          <GreenButton onClick={handleUnreserve}>Unreserve</GreenButton>
        )}

        <RedButton onClick={handleDelete}>Delete</RedButton>
      </div>
    </div>
  );
};

export default ApplianceListingCard;
