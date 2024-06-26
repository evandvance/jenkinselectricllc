'use client';
import { useState, useEffect } from 'react';
import AdminReserveCard from './AdminCards/AdminReservedCard';
import { ReservationInterface } from '@/interfaces/ReservationInterface';

const ReservedApplianceDisplay = () => {
  const [reservations, setReservations] = useState<ReservationInterface[]>();

  useEffect(() => {
    fetch('/api/admin/appliances/reserved').then(async (data) => {
      const result = (await data.json()) as ApiResponse<ReservationInterface[]>;

      const reservationsResult = result.data;
      if (!reservationsResult) return;

      setReservations(reservationsResult);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-5 space-y-3 w-[90%]">
      <h2 className="text-3xl text-red-500">
        WARNING! There is no confirm for deletions or unreserves yet
      </h2>
      {reservations?.length === 0 ? (
        <div> No Reservation Found</div>
      ) : (
        reservations?.map((reservation) => {
          return (
            <AdminReserveCard
              key={reservation.id}
              reservation={reservation}
              allReservations={reservations}
              setReservations={setReservations}
            />
          );
        })
      )}
    </div>
  );
};

export default ReservedApplianceDisplay;
