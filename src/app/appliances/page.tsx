'use client';
import { useState, useEffect } from 'react';
import ApplianceCard from '@/components/Cards/ApplianceCard';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface AppliancePageProps {
  searchParams: {
    age: 'New' | 'Used';
    filter:
      | 'washer'
      | 'dryer'
      | 'dishwasher'
      | 'fridge'
      | 'freezer'
      | ' microwave'
      | 'stove'
      | 'windowacunit'
      | 'icemaker'
      | 'industrial'
      | 'dryerwashersets'
      | 'other'
      | null;
    sortBy: 'priceAscending' | 'priceDescending' | 'relevance' | null;
  };
}

const AppliancePage = ({
  searchParams: { age, filter, sortBy },
}: AppliancePageProps) => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch(`/api/appliances`).then(async (data) =>
      setAppliances(await data.json())
    );
  }, []);

  useEffect(() => {
    setAppliances(appliances.filter((appliance) => appliance.age === age));
  }, [age]);

  if (appliances.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center m-5 text-2xl">
        <h1 className="text-5xl mb-6">{age} Appliances</h1>
        <p>No Appliances Found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col m-5 justify-center items-center">
      <h1 className="text-5xl mb-6">{age} Appliances</h1>
      {appliances.map((appliance) => {
        return (
          <ApplianceCard
            key={appliance.id}
            applianceId={appliance.id}
            applianceName={appliance.applianceName}
            modelNumber={appliance.modelNumber}
            price={appliance.price}
            imageUrl={appliance.images[0].imageUrl}
            type={appliance.type}
          />
        );
      })}
    </div>
  );
};

export default AppliancePage;
