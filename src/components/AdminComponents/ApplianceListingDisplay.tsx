'use client';
import { useState, useEffect } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceListingCard from './ApplianceListingCard';

const ApplianceListingDisplay = () => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch('/api/appliances', { cache: 'no-cache' }).then(async (data) => {
      let result = await data.json();
      setAppliances(result);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-3">
      {appliances.length === 0 ? (
        <div className="flex flex-col justify-center items-center m-5 text-2xl">
          <p>No Appliances Found</p>
        </div>
      ) : (
        appliances.map((appliance) => {
          return (
            <ApplianceListingCard key={appliance.id} appliance={appliance} />
          );
        })
      )}
    </div>
  );
};

export default ApplianceListingDisplay;
