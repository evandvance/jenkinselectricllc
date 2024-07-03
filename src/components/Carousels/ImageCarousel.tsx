'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { FaArrowAltCircleLeft } from 'react-icons/fa';
// import { FaArrowAltCircleRight } from 'react-icons/fa';

export interface ImageCarouselData {
  image: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageCarouselData[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [slide, setSlide] = useState(0);

  //   const nextSlide = () => {
  //     const newIndex = slide + 1;

  //     if (newIndex < images.length) {
  //       setSlide(newIndex);
  //     }
  //   };

  //   const prevSlide = () => {
  //     const newIndex = slide - 1;

  //     if (newIndex >= 0) {
  //       setSlide(newIndex);
  //     }
  //   };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = slide + 1;

      if (newIndex == images.length) {
        return setSlide(0);
      }

      setSlide(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [slide, images]);

  return (
    <div className="relative flex justify-center items-center min-w-[330px] min-h-[330px] max-w-[400px] max-h-[400px] lg:h-[400px] lg:w-[400px]">
      {/* <FaArrowAltCircleLeft
        color="white"
        className="text-2xl absolute left-[1rem] hover:cursor-pointer"
        onClick={prevSlide}
      /> */}
      {images.map((image, index) => (
        <Image
          className={
            slide === index
              ? 'min-w-[330px] min-h-[330px] max-w-[400px] max-h-[400px] lg:h-[400px] lg:w-[400px] shadow-sm rounded'
              : 'hidden'
          }
          key={index}
          src={image.image}
          alt={image.alt}
          width={400}
          height={400}
          priority
        />
      ))}

      {/* <FaArrowAltCircleRight
        color="white"
        className="text-2xl absolute right-[1rem] hover:cursor-pointer"
        onClick={nextSlide}
      /> */}
      <span className="flex absolute bottom-[1rem] ">
        {images.map((_, index) => {
          return (
            <button
              className={`mx-1 ${
                slide === index ? 'bg-white' : 'bg-slate-500'
              } h-2 w-2 rounded-full outline-none shadow-sm hover:cursor-pointer`}
              key={index}
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ImageCarousel;
