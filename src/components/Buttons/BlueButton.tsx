import Link from 'next/link';

interface BluebuttonProps {
  href: string;
  title: string;
  className?: string;
}

const BlueButton = ({ href, title, className }: BluebuttonProps) => {
  return (
    <Link
      data-testid="blueButton-1"
      href={href}
      className={`flex justify-center items-center m-5 w-60 h-20 text-2xl bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white rounded-xl hover:bg-white hover:text-jellcblue ${
        className ? className : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default BlueButton;
