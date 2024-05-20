import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav
      data-testid="nav-1"
      className="bg-slate-950 min-h-[10vh] w-screen flex flex-col items-center justify-around"
    >
      <Link href="/" className="h-[10vh] w-28 fixed">
        <Image
          className="object-contain"
          src="assets/logo.svg"
          alt="Jenkins Electric LLC logo"
          fill
        />
      </Link>
    </nav>
  );
};

export default Navbar;
