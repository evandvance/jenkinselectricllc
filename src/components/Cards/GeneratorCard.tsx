'use client';
import Link from 'next/link';
import Image from 'next/image';
import BlueButton from '../Buttons/BlueButton';
import { generatorsInterface } from '@/interfaces/GeneratorInterface';

interface GeneratorCardProps {
  generator: generatorsInterface;
}

const GeneratorCard = ({ generator }: GeneratorCardProps) => {
  return (
    <div className="m-5 p-5 flex flex-col lg:flex-row items-center bg-slate-300 w-[85vw] lg:w-3/4 border rounded-xl text-black">
      <Link
        href={`/generators/${generator.id}`}
        className="w-[90%] lg:w-1/2 flex justify-center items-center relative"
      >
        <Image
          height={300}
          width={400}
          className="object-contain w-full h-auto p-5 lg:max-h-[350px]"
          src={generator.images[0].imageUrl}
          alt={`Image of ${generator.generatorName}`}
        />
      </Link>

      <div className="flex flex-col lg:space-y-4 lg:w-1/2">
        <div className="flex flex-col justify-between m-5 space-y-4 lg:space-y-10 lg:ml-24">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl">{generator.generatorName}</h2>
            <h3 className="text-3xl lg:text-4xl text-jellcblue">
              ${generator.price}
            </h3>
          </div>
          <div className="text-lg">
            <p>Model: {generator.modelNumber}</p>
            <p>{generator.brand}</p>
          </div>
        </div>
        <Link
          className="text-jellcblue hover:underline text-lg mx-5 lg:ml-24 "
          href={`/appliances/${generator.id}`}
        >
          More details...
        </Link>
        <div className="w-full flex items-center justify-center">
          {generator.reservation ? (
            <div className="text-4xl">Generator Reserved.</div>
          ) : (
            <BlueButton
              href={`/generators/reserve/${generator.id}`}
              title="Reserve Now"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratorCard;
