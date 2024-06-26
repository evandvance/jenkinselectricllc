'use client';
import { generatorsInterface } from '@/interfaces/GeneratorInterface';
import { GeneratorTypes } from '@prisma/client';
import { useState, useEffect } from 'react';
import GeneratorCard from '../Cards/GeneratorCard';

interface GeneratorDisplayProps {
  brand?: GeneratorTypes;
}

const GeneratorDisplay = ({ brand }: GeneratorDisplayProps) => {
  const [generators, setGenerators] = useState<generatorsInterface[]>([]);

  useEffect(() => {
    fetch('/api/generators', { cache: 'no-cache' }).then(async (data) => {
      const result = (await data.json()) as ApiResponse<generatorsInterface[]>;

      let generatorArray = result.data;

      if (!generatorArray) return;

      if (brand) {
        generatorArray = generatorArray.filter(
          (generator) => generator.brand === brand
        );
      }

      setGenerators(generatorArray);
    });
  }, [brand]);

  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-4 my-3">
      <h1 className="text-4xl lg:text-5xl">
        {brand
          ? `${brand.charAt(0).toUpperCase() + brand.slice(1)} Generators`
          : 'Generator'}
      </h1>
      <p className="text-xl m-5 lg:w-3/4">
        {/* TODO Clarify what they do with generators. */}
        Jenkins Electric installs and services{' '}
        {brand
          ? brand.charAt(0).toUpperCase() + brand.slice(1) + ' '
          : 'Champion, Duramax, and Generac'}
        Generators. We are here to answer any questions you have about
        generators. Be sure to ask about the warrenties we offer.
      </p>
      {generators?.length >= 0 ? (
        <div className="flex flex-col justify-center items-center m-5 text-2xl">
          <p>No Generators Found</p>
        </div>
      ) : (
        generators.map((generator) => {
          return <GeneratorCard generator={generator} />;
        })
      )}
    </div>
  );
};

export default GeneratorDisplay;
