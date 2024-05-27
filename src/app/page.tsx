import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import ServicesProvidedCard from '../components/Cards/ServicesProvidedCard';
import AboutUsCard from '../components/Cards/AboutUsCard';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div data-testid="landing-1" className="">
        <div className="absolute top-[8vh] left-0 h-[100vh] -z-10">
          <video autoPlay muted loop>
            <source src="lights.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="h-[100vh] max-w-[100vw]">
          <h1 className="text-7xl text-white top-8 left-56">
            Jenkins <br></br>
            <span className="text-jellcblue">Electric LLC</span>
          </h1>
          <Link className="left-[50vw] top-[70vh]" href={'#services'}>
            <FaChevronDown size="25" color="white" />
          </Link>
        </div>
      </div>

      <ServicesProvidedCard />
      <AboutUsCard />
    </div>
  );
};

export default HomePage;
