import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import ServicesProvidedCard from '../components/Cards/ServicesProvidedCard';
import AboutUsCard from '../components/Cards/AboutUsCard';
import FadeIn from '@/components/Utilities/FadeIn';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div data-testid="landing-1" className="h-screen">
        <div className="absolute -left-[43rem] lg:left-0 h-[100vh]">
          <video
            className="min-h-full min-w-full object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="lights.webm" type="video/webm" />
          </video>
        </div>

        <div className="relative z-0 flex flex-col justify-between h-[92vh]">
          <div className="flex w-screen">
            <FadeIn>
              <h1 className="text-5xl lg:text-7xl mt-6 ml-5 lg:ml-36 text-left text-white">
                Jenkins <br></br>
                <span className="text-jellcblue">Electric LLC</span>
              </h1>
            </FadeIn>
          </div>
          <div className="flex w-screen h-[8vh]">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center items-center">
              <Link href={'#services'}>
                <FaChevronDown
                  className="animate-bounce z-0"
                  size="25"
                  color="white"
                />
              </Link>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>

      <FadeIn>
        <ServicesProvidedCard />
      </FadeIn>
      <FadeIn>
        <AboutUsCard />
      </FadeIn>
    </div>
  );
};

export default HomePage;
