import ApplianceDisplay from '@/components/Displays/ApplianceDisplay';

interface GeneratorPageProps {
  searchParams: {
    brand?: 'champion' | 'duramax' | 'generac';
  };
}

const GeneratorPage = ({ searchParams: { brand } }: GeneratorPageProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-5 text-4xl lg:text-5xl">
        {brand
          ? `${brand.charAt(0).toUpperCase() + brand.slice(1)} Generators`
          : 'Generators'}
      </h1>
      <p className="text-xl m-5 text-center lg:w-1/2">
        Jenkins Electric installs and services{' '}
        {brand
          ? brand.charAt(0).toUpperCase() + brand.slice(1) + ' '
          : 'Champion, Duramax, and Generac '}
        Generators. We also offer service plans for your regular maintenance.
      </p>

      <ApplianceDisplay
        generatorType={brand ? brand : 'all'}
        filter="generator"
      />
    </div>
  );
};

export default GeneratorPage;
