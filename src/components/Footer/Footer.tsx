import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      data-testid="footer-1"
      className="flex flex-col lg:flex-row justify-around items-centerw-screen h-[8vh] bg-black text-white"
    >
      <Link
        className="flex justify-center items-center h-full w-1/3 text-2xl"
        href={'/'}
      >
        Jenkins Electric LLC.
      </Link>
      <div className="flex flex-col lg:flex-row justify-around items-center w-2/3 h-full">
        <div></div>
        <Link className="text-2xl" href={'/contact'}>
          Contact Us Now!
        </Link>
        <div id="icons" className="flex justify-around w-48 h-[8vh] text-4xl">
          <Link href={'tel:7317276578'}>
            <FaPhone className="h-full" color="white" />
          </Link>
          <Link
            target="_blank"
            href={'https://www.facebook.com/JenkinsElectric96/'}
          >
            <FaFacebook className="h-full" color="white" />
          </Link>
          <Link target="_blank" href={''}>
            <FaYoutube className="h-full" color="white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
