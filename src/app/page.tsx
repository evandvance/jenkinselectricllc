import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import CenterChildren from '@/components/utilities/CenterChildren';

const HomePage = () => {
  return (
    <CenterChildren className="flex-col overflow-x-hidden">
      <div
        data-testid="landing-1"
        className="relative inline-block h-[100vh] w-[100vw] overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <video autoPlay muted loop>
            <source src="lights.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="h-[100vh] max-w-[100vw]">
          <h1 className="text-7xl text-white relative top-8 left-56">
            Jenkins <br></br>
            <span className="text-jellcblue">Electric LLC</span>
          </h1>
          <Link className="relative left-[50vw] top-[70vh]" href={'#services'}>
            <FaChevronDown size="25" color="white" />
          </Link>
        </div>
      </div>
      <div className="bg-pink-500 h-80 w-80">Bottom </div>
    </CenterChildren>
  );
};

export default HomePage;
