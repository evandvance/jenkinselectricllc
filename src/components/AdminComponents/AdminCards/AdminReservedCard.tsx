import { Reservations } from '@prisma/client';
import Link from 'next/link';
import { handleDelete, handleUnreserve } from './ApplianceListingCard';

interface AdminReserveCardsProps {
  reservation: Reservations;
}

const AdminReserveCard = ({ reservation }: AdminReserveCardsProps) => {
  return (
    <div className="w-[90vw] rounded-xl p-4 flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center bg-slate-300">
      <div className="lg:flex lg:text-wrap">
        <Link
          className="hover:underline underline-offset-2 hover:text-jellcblue"
          href={`mailto:${reservation.email}`}
        >
          {reservation.email}{' '}
        </Link>
        <p className="ml-1">
          has reserved applianceId {reservation.applianceId} on{' '}
          {new Date(reservation.reservedAt).toLocaleString()} with comments "
          {reservation.comments}"
        </p>
      </div>

      <div className="lg:space-x-5">
        <button
          onClick={() => handleUnreserve(reservation.applianceId)}
          className="text-green-500 hover:underline hover:cursor-pointer underline-offset-2"
        >
          Unreserve
        </button>

        <button
          onClick={() => handleDelete(reservation.applianceId)}
          className="text-red-500 hover:underline underline-offset-2"
        >
          Delete Appliance
        </button>
      </div>
    </div>
  );
};

export default AdminReserveCard;
