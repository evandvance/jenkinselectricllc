'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import DropDownLink from './DropDownLink';
import { InfoItems } from './InfoItems';
import { ApplianceItems } from './ApplianceItems';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="w-screen min-h-[8vh] text-white bg-black">
      <div className="w-screen h-full px-3 flex justify-between items-center">
        <Link href="/" className="h-[8vh] w-24 object-contain">
          <img
            src="/assets/logo.svg"
            alt="JenkinsElectricLLC logo"
            className="w-auto h-[8vh]"
          />
        </Link>
        <RxHamburgerMenu
          className="m-2 lg:m-5 text-4xl hover:cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
          color="white"
        />
      </div>
      <ul
        className={`absolute ${
          isNavOpen ? 'translate-y-0' : '-translate-y-[100vh]'
        } w-screen pt-2 text-2xl space-y-1 duration-500 ease-in-out transition-all bg-black`}
      >
        <li className="min-h-[50px] py-1 border-b">
          <Link className="m-1 p-2 hover:text-jellcblue" href={'/schedulenow'}>
            Schedule Now
          </Link>
        </li>
        <li className="min-h-[50px]">
          <DropDownLink
            dropDownLinks={InfoItems}
            title="Info"
            className="m-1 p-2 border-b"
          />
        </li>
        <li className="min-h-[50px] py-1 border-b">
          <Link className="m-1 p-2 hover:text-jellcblue" href={'/contact'}>
            Contact Us
          </Link>
        </li>
        <li className="min-h-[50px]">
          <DropDownLink
            dropDownLinks={ApplianceItems}
            title="Appliances"
            className="m-1 p-2"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
