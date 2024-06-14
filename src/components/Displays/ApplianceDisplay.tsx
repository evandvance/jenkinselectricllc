import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceCard from '../Cards/ApplianceCard';

interface ApplianceDisplayProps {
  age?: string;
  filter?: string;
  sortBy?: string;
}

const ApplianceDisplay = async ({
  age,
  filter,
  sortBy,
}: ApplianceDisplayProps) => {
  if (!age) return;
  const res = await fetch(`http:localhost:3000/api/appliances`);

  let appliances: appliaceInterface[] = await res.json();

  appliances = appliances.filter((appliance) => appliance.age === age);

  if (filter) {
    appliances = appliances.filter((appliance) => appliance.type === filter);
  }

  if (appliances.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center m-5 text-2xl">
        <p>No Appliances Found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen">
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

export default ApplianceDisplay;
