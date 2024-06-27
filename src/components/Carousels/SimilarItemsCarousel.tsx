'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ApplianceTypes } from '@prisma/client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Link from 'next/link';

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

      setAppliances(similarAppliances);
    });
  }, [type, id]);

  const [focusedIndex, setFocusedIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = focusedIndex + 1;

    if (newIndex == appliances.length) {
      return setFocusedIndex(0);
    }

    setFocusedIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = focusedIndex - 1;

    if (newIndex < 0) {
      return setFocusedIndex(appliances.length);
    }

    setFocusedIndex(newIndex);
  };

  return (
    <>
      <h2 className="text-3xl">Similar Appliances</h2>
      {appliances.length === 0 ? (
        <p className="m-2">No Similar Appliances Found</p>
      ) : (
        <div className="relative flex justify-center m-2 items-center min-w-[200px] min-h-[200px] max-w-[300px] max-h-[300px] lg:h-[300px] lg:w-[300px]">
          <FaArrowAltCircleLeft
            className="text-2xl absolute -left-[2.5rem] hover:cursor-pointer"
            onClick={prevSlide}
          />
          {appliances.map((appliance, index) => (
            <Link
              key={index}
              href={`/appliances/${appliance.id}`}
              className={focusedIndex === index ? 'w-full h-full' : 'hidden'}
            >
              <Image
                className={
                  focusedIndex === index
                    ? 'w-full h-full shadow-sm rounded'
                    : 'hidden'
                }
                src={appliance.images[0].imageUrl}
                alt={appliance.applianceName}
                width={300}
                height={300}
                priority
              />
            </Link>
          ))}

          <FaArrowAltCircleRight
            className="text-2xl absolute -right-[2.5rem] hover:cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      )}
    </>
  );
};

export default SimilarItemsCarousel;
