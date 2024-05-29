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
      className={`w-54 h-24 bg-jellcblue text-white border rounded hover:bg-white hover:text-black${
        className ? className : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default BlueButton;
