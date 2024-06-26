import { GeneratorTypes } from '@prisma/client';
import GeneratorDisplay from '@/components/Displays/GeneratorDisplay';

interface GeneratorPageProps {
  searchParams: {
    brand?: GeneratorTypes;
  };
}

const GeneratorPage = ({ searchParams: { brand } }: GeneratorPageProps) => {
  console.log(brand);
  return (
    <div className="flex flex-col justify-center items-center">
      <GeneratorDisplay brand={brand} />
    </div>
  );
};

export default GeneratorPage;
