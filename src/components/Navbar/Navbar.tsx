import Link from 'next/link';
import DropdownButton from './NavbarComponents/DropDownButton';
import { InfoItems } from './InfoItems';
import { ApplianceItems } from './ApplianceItems';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <nav
      data-testid="nav-1"
      className="bg-black min-h-[8vh] w-screen flex justify-between z-50"
    >
      <Link href="/" className="h-[8vh] w-24 object-contain ml-16">
        <img
          src="/assets/logo.svg"
          alt="JenkinsElectricLLC logo"
          className="w-auto h-[8vh]"
        />
      </Link>

      <div className="flex justify-center items-center text-white text-2xl mr-16">
        {/* <RxHamburgerMenu className="hover:cursor-pointer" /> */}

        <Link className="hover:text-jellcblue" href={'/schedulenow'}>
          Schedule Now
        </Link>
        <DropdownButton
          title="Info"
          dropdownItems={InfoItems}
          className="hover:text-jellcblue"
          childrenClassName="text-black hover:text-jellcblue"
        />
        <Link className="hover:text-jellcblue" href={'/contact'}>
          Contact Us
        </Link>
        <DropdownButton
          title="Appliances"
          className="hover:text-jellcblue"
          dropdownItems={ApplianceItems}
          childrenClassName="text-black hover:text-jellcblue"
        />
      </div>
    </nav>
  );
};

export default Navbar;
