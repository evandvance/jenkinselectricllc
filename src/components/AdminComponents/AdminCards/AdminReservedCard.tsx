import { Reservations } from '@prisma/client';
import Link from 'next/link';
import { handleDelete, handleUnreserve } from './ApplianceListingCard';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';

interface AdminReserveCardsProps {
  reservation: Reservations;
}

const AdminReserveCard = ({ reservation }: AdminReserveCardsProps) => {
  return (
    <div className="w-[90vw] rounded-xl p-4 flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center bg-slate-300">
      <div className="lg:flex lg:text-wrap flex lg:justify-center items-center flex-wrap">
        <Link
          className="hover:underline underline-offset-2 hover:text-jellcblue"
          href={`mailto:${reservation.email}`}
        >
          {reservation.email}{' '}
        </Link>
        <p className="lg:ml-1">has reserved appliance with id</p>
        <Link
          className="lg:ml-1 hover:text-jellcblue"
          href={`/appliances/${reservation.applianceId}`}
        >
          {reservation.applianceId}
        </Link>
        <p className="lg:ml-1">
          on {new Date(reservation.reservedAt).toLocaleString()} with comments
          &quot;
          {reservation.comments}&quot;
        </p>
      </div>

      <div className="w-full flex justify-around items-center mt-3 lg:space-x-5 lg:w-1/4 lg:justify-end">
        <GreenButton onClick={() => handleUnreserve(reservation.applianceId)}>
          Unreserve
        </GreenButton>

        <RedButton onClick={() => handleDelete(reservation.applianceId)}>
          Delete Appliance
        </RedButton>
      </div>
    </div>
  );
};

export default AdminReserveCard;
