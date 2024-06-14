import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceListingCard from './ApplianceListingCard';

const ApplianceListingDisplay = async () => {
  const res = await fetch(`http:localhost:3000/api/appliances`, {
    cache: 'no-cache',
  });

  let appliances: appliaceInterface[] = await res.json();

  if (appliances.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center m-5 text-2xl">
        <p>No Appliances Found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-3">
      {appliances.map((appliance) => {
        return (
          <ApplianceListingCard
            key={appliance.id}
            applianceId={appliance.id}
            applianceName={appliance.applianceName}
            modelNumber={appliance.modelNumber}
            price={appliance.price}
          />
        );
      })}
    </div>
  );
};

export default ApplianceListingDisplay;
