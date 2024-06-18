'use client';
import { useState, useEffect } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceCard from '../Cards/ApplianceCard';

interface ApplianceDisplayProps {
  age?: string;
  filter?: string;
  sortBy?: string;
}

const ApplianceDisplay = ({ age, filter, sortBy }: ApplianceDisplayProps) => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch('/api/appliances', {
      cache: 'no-cache',
    }).then(async (data) => {
      let result: appliaceInterface[] = await data.json();
      result = result.filter((appliance) => appliance.age === age);

      if (filter) {
        result = result.filter((appliance) => appliance.type === filter);
      }

      setAppliances(result);
    });
  }, [age, filter]);

  if (!age) return;

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {appliances.length <= 0 ? (
        <div className="flex flex-col justify-center items-center m-5 text-2xl">
          <p>No Appliances Found</p>
        </div>
      ) : (
        appliances.map((appliance) => {
          return <ApplianceCard key={appliance.id} appliance={appliance} />;
        })
      )}
    </div>
  );
};

export default ApplianceDisplay;
