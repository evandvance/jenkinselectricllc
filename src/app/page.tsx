import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import ServicesProvidedCard from '../components/Cards/ServicesProvidedCard';
import AboutUsCard from '../components/Cards/AboutUsCard';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div data-testid="landing-1" className="">
        <div className="absolute left-0 h-[100vh] -z-50">
          <video
            className="min-h-full min-w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src="https://mediacdn.jenkinselectric.llc/Lights.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="relative -z-20 flex flex-col justify-between h-[92vh]">
          <div className="flex w-screen">
            <h1 className="text-5xl lg:text-7xl mt-6 ml-5 lg:ml-36 text-left text-white">
              Jenkins <br></br>
              <span className="text-jellcblue">Electric LLC</span>
            </h1>
          </div>
          <div className="flex w-screen h-[8vh]">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center items-center">
              <Link className="" href={'#services'}>
                <FaChevronDown
                  className="animate-bounce"
                  size="25"
                  color="white"
                />
              </Link>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>

      <ServicesProvidedCard />
      <AboutUsCard />
    </div>
  );
};

export default HomePage;
