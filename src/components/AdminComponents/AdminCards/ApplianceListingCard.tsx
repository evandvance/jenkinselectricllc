'use client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
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
    <div className="w-[85vw]  bg-slate-300 rounded-xl flex p-5 items-center justify-between">
      <h2>{appliance.applianceName}</h2>
      <div className="flex space-x-3">
        <p>{appliance.modelNumber}</p>
        <p>${appliance.price}</p>
      </div>
      <div>
        {appliance.reservation && (
          <button
            onClick={() => handleUnreserve(appliance.id)}
            className="text-green-500 hover:underline hover:cursor-pointer underline-offset-2"
          >
            Unreserve
          </button>
        )}

        <button
          onClick={() => handleDelete(appliance.id)}
          className="text-red-500 hover:underline underline-offset-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ApplianceListingCard;
