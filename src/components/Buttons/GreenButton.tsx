'use client';
import { ReactNode } from 'react';

interface GreenButtonProps {
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
}

const GreenButton = ({
  onClick,
  className,
  children,
  type,
}: GreenButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`min-w-24 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-white hover:text-green-600 hover:underline underline-offset-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default GreenButton;
