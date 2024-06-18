'use client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';
interface ApplianceListingCardProps {
  appliance: appliaceInterface;
}

export const handleDelete = async (id: number) => {
  const result = await fetch(`/api/admin/appliances/${id}`, {
    method: 'DELETE',
  });
  window.location.reload();
};

export const handleUnreserve = async (id: number) => {
  const result = await fetch(`/api/admin/appliances/${id}`, {
    method: 'PATCH',
  });
  window.location.reload();
};

const ApplianceListingCard = ({ appliance }: ApplianceListingCardProps) => {
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
          <GreenButton onClick={() => handleUnreserve(appliance.id)}>
            Unreserve
          </GreenButton>
        )}

        <RedButton onClick={() => handleDelete(appliance.id)}>Delete</RedButton>
      </div>
    </div>
  );
};

export default ApplianceListingCard;
