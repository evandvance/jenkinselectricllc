'use client';
import { useState } from 'react';
import { ApplianceImages } from '@prisma/client';
import Image from 'next/image';

interface ApplianceImageCarouselProps {
  images: ApplianceImages[];
  applianceName?: string;
}

const ApplianceImagesCarousel = ({
  images,
  applianceName,
}: ApplianceImageCarouselProps) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(images[0].imageUrl);
  const [remainingImages, setRemainingImages] = useState(
    images.slice(1, images.length)
  );

  const handleOnClick = (imageUrl: string) => {
    setRemainingImages(images.filter((image) => image.imageUrl !== imageUrl));
    setSelectedImageUrl(imageUrl);
  };

  return (
    <div>
      <div className="w-screen lg:w-96 flex justify-center items-center relative">
        <Image
          height={500}
          width={600}
          className="object-contain w-full h-auto p-5 "
          src={selectedImageUrl}
          alt={`Image of ${applianceName}`}
        />
      </div>
      <div className="h-32 flex">
        {remainingImages.map((image) => {
          return (
            <Image
              key={image.id}
              onClick={() => handleOnClick(image.imageUrl)}
              height={500}
              width={600}
              className="object-contain w-full h-auto p-5 hover:cursor-pointer"
              src={image.imageUrl}
              alt={`Image of ${applianceName}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApplianceImagesCarousel;
