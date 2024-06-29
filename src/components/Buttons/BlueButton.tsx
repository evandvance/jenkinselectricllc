import Link from 'next/link';

interface BluebuttonProps {
  href: string;
  title: string;
  className?: string;
  target?: string;
}

const BlueButton = ({ href, title, className, target }: BluebuttonProps) => {
  return (
    <Link
      data-testid="blueButton-1"
      href={href}
      target={target}
      className={`flex justify-center items-center m-5 w-60 h-20 text-2xl bg-gradient-to-r from-jellcdarkblue to-jellcblue hover:border hover:border-jellcblue hover:bg-none text-white rounded-xl hover:bg-white hover:text-jellcblue ${
        className ? className : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default BlueButton;
