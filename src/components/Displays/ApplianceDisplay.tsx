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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let result: appliaceInterface[] = [];
    fetch('/api/appliances', {
      cache: 'no-cache',
    }).then(async (data) => {
      result = await data.json();
      console.log(result);
      result = result.filter((appliance) => appliance.age === age);

      if (filter) {
        result = result.filter((appliance) => appliance.type === filter);
      }

      setAppliances(result);

      setIsLoading(!(appliances.length > 0));
    });
  }, [age, filter]);

  if (!age) return;

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {isLoading && (
        <div className="flex flex-col justify-center items-center m-5 text-2xl">
          <p>No Appliances Found</p>
        </div>
      )}
      {appliances.length > 0 &&
        appliances.map((appliance) => {
          return (
            <ApplianceCard
              key={appliance.id}
              applianceId={appliance.id}
              applianceName={appliance.applianceName}
              modelNumber={appliance.modelNumber}
              price={appliance.price}
              imageUrl={appliance.images[0]?.imageUrl}
              type={appliance.type}
              brand={appliance.brand}
            />
          );
        })}
    </div>
  );
};

export default ApplianceDisplay;
