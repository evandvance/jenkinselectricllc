import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';
import { FaRegRegistered } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      data-testid="footer-1"
      className="flex flex-col lg:flex-row justify-around items-center w-screen lg:h-[8vh] bg-black text-white"
    >
      <Link
        className="flex m-3 justify-center items-center h-full lg:w-1/3 "
        href={'/'}
      >
        Jenkins Electric LLC. <FaRegRegistered className="text-xs" />
      </Link>
      <div className="flex flex-col lg:flex-row justify-around items-center w-2/3 h-full">
        <div className="w-1/4"></div>
        <div className="w-1/8"></div>
        <Link
          className="text-xl m-5 border px-3 py-2 rounded hover:bg-white hover:text-black"
          href={'/contact'}
        >
          Contact Us Now!
        </Link>
        <div
          data-testid="icons-1"
          id="icons"
          className="flex justify-around w-48 h-[8vh] text-4xl"
        >
          <Link href={'tel:7317276578'}>
            <FaPhone className="h-full" color="white" />
          </Link>
          <Link
            target="_blank"
            href={'https://www.facebook.com/JenkinsElectric96/'}
          >
            <FaFacebook className="h-full" color="white" />
          </Link>
          <Link
            target="_blank"
            href={'https://www.youtube.com/user/dakotbeastj'}
          >
            <FaYoutube className="h-full" color="white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
