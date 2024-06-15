'use client';
interface ApplianceListingCardProps {
  applianceId: number;
  applianceName: string;
  modelNumber: string;
  price: number;
  isReserved?: boolean;
}

const handleDelete = async (id: number) => {
  const result = await fetch(`/api/admin/appliances/${id}`, {
    method: 'DELETE',
  });
  window.location.reload();
};

const handleUnreserve = async (id: number) => {
  const result = await fetch(`/api/admin/appliances/${id}`, {
    method: 'PATCH',
  });
  window.location.reload();
};

const ApplianceListingCard = ({
  applianceId,
  applianceName,
  modelNumber,
  price,
  isReserved,
}: ApplianceListingCardProps) => {
  return (
    <div className="w-[85vw]  bg-slate-300 rounded-xl flex p-5 items-center justify-between">
      <h2>{applianceName}</h2>
      <div className="flex space-x-3">
        <p>{modelNumber}</p>
        <p>${price}</p>
        {isReserved && (
          <p
            onClick={() => handleUnreserve(applianceId)}
            className="text-red-500"
          >
            Reserved
          </p>
        )}
      </div>
      <button
        onClick={() => handleDelete(applianceId)}
        className="text-red-500 hover:underline underline-offset-2"
      >
        Delete
      </button>
    </div>
  );
};

export default ApplianceListingCard;
