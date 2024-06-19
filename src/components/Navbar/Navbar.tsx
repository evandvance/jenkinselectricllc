'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

import DropDownLink from './DropDownLink';
import { InfoItems } from './InfoItems';
import { ApplianceItems } from './ApplianceItems';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { status } = useSession();

  return (
    <nav className="w-screen text-white bg-black lg:flex lg:justify-between">
      <div className="w-screen lg:w-auto lg:ml-10 px-3 flex justify-between items-center">
        <Link href="/" className="w-20 h-auto">
          <Image
            src="/assets/logo.svg"
            alt="JenkinsElectricLLC logo"
            className="w-full h-auto object-contain bg-black"
            height={3}
            width={4}
          />
        </Link>

        <div className="lg:hidden">
          {isNavOpen ? (
            <IoCloseOutline
              className="m-1 lg:m-4 text-5xl hover:cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}
              color="white"
            />
          ) : (
            <RxHamburgerMenu
              className="m-2 lg:m-5 text-4xl hover:cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}
              color="white"
            />
          )}
        </div>
      </div>
      <ul
        className={`absolute ${
          isNavOpen ? 'translate-x-0' : 'translate-x-[100vw]'
        } z-40 w-screen lg:w-auto lg:flex lg:static lg:justify-center lg:items-baseline lg:mr-24 lg:translate-x-0 pt-2 text-2xl space-y-1 duration-500 ease-in-out transition-all lg:transition-none bg-black`}
      >
        <li className="min-h-[50px] py-1 border-b lg:border-none">
          <Link
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="m-1 p-2 hover:text-jellcblue"
            href={'/'}
          >
            Home
          </Link>
        </li>
        <li className="min-h-[50px] py-1 border-b lg:border-none">
          <Link
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="m-1 p-2 hover:text-jellcblue"
            href={'/schedulenow'}
          >
            Schedule Now
          </Link>
        </li>
        <li className="min-h-[50px]">
          <DropDownLink
            dropDownLinks={InfoItems}
            title="Info"
            className="m-1 p-2 border-b lg:border-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </li>
        <li className="min-h-[50px] py-1 border-b lg:border-none">
          <Link
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="m-1 p-2 hover:text-jellcblue"
            href={'/contact'}
          >
            Contact Us
          </Link>
        </li>
        <li className="min-h-[50px]">
          <DropDownLink
            dropDownLinks={ApplianceItems}
            title="Appliances"
            className="m-1 p-2 lg:border-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </li>
        {status === 'authenticated' && (
          <li className="min-h-[50px] py-3 border-t lg:border-none">
            <Link
              href={'/admin'}
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="m-1 p-2 hover:text-jellcblue"
            >
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
