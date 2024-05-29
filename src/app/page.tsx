import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import ServicesProvidedCard from '../components/Cards/ServicesProvidedCard';
import AboutUsCard from '../components/Cards/AboutUsCard';
import BlueButton from '@/components/Buttons/BlueButton';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div data-testid="landing-1" className="">
        <div className="absolute top-[8vh] left-0 h-[100vh] -z-10">
          <video autoPlay muted loop>
            <source src="lights.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col justify-between h-[92vh]">
          <div className="flex w-screen">
            <div className="flex w-1/3">
              <div className="w-1/3"></div>
              <h1 className="text-7xl mt-5 h-64 text-left text-white w-2/3">
                Jenkins <br></br>
                <span className="text-jellcblue">Electric LLC</span>
              </h1>
            </div>
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
          </div>
          <div className="flex w-screen h-[8vh]">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center items-center">
              <Link className="" href={'#services'}>
                <FaChevronDown size="25" color="white" />
              </Link>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>

      <ServicesProvidedCard className="mt-24" />
      <AboutUsCard />
    </div>
  );
};

export default HomePage;
