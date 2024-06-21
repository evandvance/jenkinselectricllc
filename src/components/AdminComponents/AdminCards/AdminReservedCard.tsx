import { Reservations } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import RedButton from '@/components/Buttons/RedButton';
import GreenButton from '@/components/Buttons/GreenButton';

interface AdminReserveCardsProps {
  reservation: Reservations;
  allReservations: Reservations[];
  setReservations: Dispatch<SetStateAction<Reservations[] | undefined>>;
}

const AdminReserveCard = ({
  reservation,
  allReservations,
  setReservations,
}: AdminReserveCardsProps) => {
  const handleDelete = async () => {
    const oldReservations = allReservations;
    setReservations(allReservations.filter((res) => res.id !== reservation.id));

    const response = await fetch(
      `/api/admin/appliances/${reservation.applianceId}`,
      {
        method: 'DELETE',
      }
    );
    const data = (await response.json()) as ApiResponse<undefined>;

    if (data.status !== 204) {
      setReservations(oldReservations);
    }
  };

  const handleUnreserve = async () => {
    const oldReservations = allReservations;

    setReservations(allReservations.filter((res) => res.id !== reservation.id));

    const result = await fetch(
      `/api/admin/appliances/${reservation.applianceId}`,
      {
        method: 'PATCH',
      }
    );

    const data = (await result.json()) as ApiResponse<undefined>;

    if (data.status !== 200) {
      setReservations(oldReservations);
    }
  };

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
        <GreenButton onClick={handleUnreserve}>Unreserve</GreenButton>

        <RedButton onClick={handleDelete}>Delete Appliance</RedButton>
      </div>
    </div>
  );
};

export default AdminReserveCard;
