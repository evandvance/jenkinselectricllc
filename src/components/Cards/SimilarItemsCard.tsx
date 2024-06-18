import Link from 'next/link';
import Image from 'next/image';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

interface SimilarItemsCardProps {
  appliance: appliaceInterface;
}

const SimilarItemsCard = ({ appliance }: SimilarItemsCardProps) => {
  return (
    <Link href={`/appliances/${appliance.id}`}>
      <Image
        height={300}
        width={300}
        src={appliance.images[0].imageUrl}
        alt={`Image of ${appliance.applianceName}`}
      />
    </Link>
  );
};

export default SimilarItemsCard;
