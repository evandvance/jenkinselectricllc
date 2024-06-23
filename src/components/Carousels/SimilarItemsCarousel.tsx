'use client';
import { useState, useEffect } from 'react';
import { ApplianceTypes } from '@prisma/client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import SimilarItemsCard from '../Cards/SimilarItemsCard';

interface SimilarItemsCarouselProps {
  type?: ApplianceTypes;
  id?: number;
}

const SimilarItemsCarousel = ({ type, id }: SimilarItemsCarouselProps) => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch(`/api/appliances?type=${type}`).then(async (data) => {
      let result = (await data.json()) as ApiResponse<appliaceInterface[]>;
      let similarAppliances = result.data;

      if (!similarAppliances) return;

      similarAppliances = similarAppliances.filter(
        (appliance) => appliance.id !== id
      );

      //todo make this be larger and have a carousel
      similarAppliances = similarAppliances.slice(0, 3);

      setAppliances(similarAppliances);
    });
  }, [type, id]);

  return (
    <div className="w-screen flex flex-col justify-center items-center m-5 space-y-3">
      <h2 className="text-4xl">Similar Items</h2>
      <div className="flex space-x-5">
        {appliances.length === 0 || type === undefined ? (
          <div className="text-3xl lg:text-5xl">
            No Similar appliances found
          </div>
        ) : (
          appliances.map((appliance) => {
            return (
              <SimilarItemsCard key={appliance.id} appliance={appliance} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SimilarItemsCarousel;
