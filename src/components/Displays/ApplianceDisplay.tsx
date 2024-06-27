'use client';
import { useState, useEffect } from 'react';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceCard from '../Cards/ApplianceCard';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';

interface ApplianceDisplayProps {
  age?: ApplianceAges;
  filter?: ApplianceTypes;
  sortBy?: string;
  page?: number;
  pageSize?: number;
  generatorType?: 'champion' | 'duramax' | 'generac' | 'all';
}

const ApplianceDisplay = ({
  age,
  filter,
  generatorType,
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

      if (age) {
        applianceArray = applianceArray.filter(
          (appliance) => appliance.age === age
        );
      }

      if (filter) {
        applianceArray = applianceArray.filter(
          (appliance) => appliance.type === filter
        );
      }

      if (!generatorType) {
        applianceArray = applianceArray.filter(
          (appliance) => appliance.type !== 'generator'
        );
      }

      if (generatorType && generatorType !== 'all') {
        applianceArray = applianceArray.filter(
          (applance) =>
            applance.brand.toLowerCase() === generatorType.toLocaleLowerCase()
        );
      }

      setAppliances(applianceArray);
    });
  }, [age, filter, generatorType]);

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
