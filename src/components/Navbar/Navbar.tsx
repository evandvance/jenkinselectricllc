import Link from 'next/link';
import DropdownButton from './NavbarComponents/DropDownButton';
import { InfoItems } from './InfoItems';
import { ApplianceItems } from './ApplianceItems';

const Navbar = () => {
  return (
    <nav
      data-testid="nav-1"
      className="bg-black min-h-[8vh] w-screen flex justify-between"
    >
      <Link href="/" className="h-[8vh] w-24 object-contain mx-5">
        <img
          src="/assets/logo.svg"
          alt="JenkinsElectricLLC logo"
          className="w-auto h-[8vh]"
        />
      </Link>

      <div className="flex justify-center items-center text-white text-3xl mx-5">
        <Link className="hover:text-blue-700" href={'/schedulenow'}>
          Schedule Now
        </Link>
        <DropdownButton
          title="Info"
          dropdownItems={InfoItems}
          className="hover:text-blue-700"
          childrenClassName="text-black"
        />
        <Link className="hover:text-blue-700" href={'/contact'}>
          Contact Us
        </Link>
        <DropdownButton
          title="Appliances"
          className="hover:text-blue-700"
          dropdownItems={ApplianceItems}
          childrenClassName="text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;