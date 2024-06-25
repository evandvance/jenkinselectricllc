'use client';
import { useState, useEffect } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceCard from '../Cards/ApplianceCard';

interface ApplianceDisplayProps {
  age?: string;
  filter?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
}

const ApplianceDisplay = ({
  age,
  filter,
  sortBy,
  page,
  pageSize,
}: ApplianceDisplayProps) => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch(`/api/appliances`, {
      cache: 'no-cache',
    }).then(async (data) => {
      const result = (await data.json()) as ApiResponse<appliaceInterface[]>;
      let applianceArray = result.data;

      if (!applianceArray) return;

      applianceArray = applianceArray.filter(
        (appliance) => appliance.age === age
      );

      if (filter) {
        applianceArray = applianceArray.filter(
          (appliance) => appliance.type === filter
        );
      }

      setAppliances(applianceArray);
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
