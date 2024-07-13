import Image from 'next/image';
import { PermitInstructions } from '@prisma/client';
import FadeIn from '../Utilities/FadeIn';

interface PermitCardProps {
  instruction: PermitInstructions;
}

const PermitCards = ({ instruction }: PermitCardProps) => {
  return (
    <FadeIn>
      <div className="w-[90vw] lg:w-[75vw] flex flex-col justify-center items-center lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            className="w-[330px] h-[330px] lg:w-[400px] lg:h-[400px] rounded"
            src={instruction.imageUrl}
            alt={`Image of ${instruction.id}`}
            height={330}
            width={330}
          />
        </div>
        <p className="text-xl w-[330px] lg:w-1/2">{instruction.description}</p>
      </div>
    </FadeIn>
  );
};

export default PermitCards;
