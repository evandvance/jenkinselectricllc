import ApplianceFilter from '@/components/ApplianceFilter';
import ApplianceDisplay from '@/components/Displays/ApplianceDisplay';

interface AppliancePageProps {
  searchParams: {
    age?: 'New' | 'Used';
    filter?:
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
      | 'other';
    sortBy?: 'priceAscending' | 'priceDescending' | 'relevance';
  };
}

const AppliancePage = ({
  searchParams: { age, filter, sortBy },
}: AppliancePageProps) => {
  if (!age) {
    return <div>Something went wrong... add age to search param</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-6">{age} Appliances</h1>
      <ApplianceFilter age={age} filter={filter} />
      <ApplianceDisplay age={age} filter={filter} sortBy={sortBy} />
    </div>
  );
};

export default AppliancePage;
