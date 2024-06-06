import ApplianceCard from '@/components/Cards/ApplianceCard';

interface AppliancePageProps {
  searchParams: {
    age: 'New' | 'Used';
    filter: 'washingmachine' | 'dryer' | 'fridge' | null;
    sortBy: 'priceAscending' | 'priceDescending' | 'relevance';
  };
}

const AppliancePage = ({
  searchParams: { age, filter, sortBy },
}: AppliancePageProps) => {
  if (age !== 'Used' && age !== 'New') {
    return (
      <div className="flex justify-center items-center text-4xl p-10">
        An error has occured -- Check query parameters
      </div>
    );
  }

  return (
    <div className="flex flex-col m-5 justify-center items-center">
      <h1 className="text-5xl mb-6">{age} Appliances</h1>
      <ApplianceCard />
    </div>
  );
};

export default AppliancePage;
