import ApplianceFilter from '@/components/ApplianceFilter';
import ApplianceDisplay from '@/components/Displays/ApplianceDisplay';
import { ApplianceTypes, ApplianceAges } from '@prisma/client';
interface AppliancePageProps {
  searchParams: {
    age?: ApplianceAges;
    filter?: ApplianceTypes;
    sortBy?: 'priceAscending' | 'priceDescending' | 'relevance';
  };
}

const AppliancePage = ({
  searchParams: { age, filter, sortBy },
}: AppliancePageProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-6">{age} Appliances</h1>
      <ApplianceFilter age={age} filter={filter} />
      <ApplianceDisplay age={age} filter={filter} sortBy={sortBy} />
    </div>
  );
};

export default AppliancePage;
