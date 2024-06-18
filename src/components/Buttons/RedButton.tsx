'use client';
import { ReactNode } from 'react';

interface RedButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const RedButton = ({ onClick, className, children }: RedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-24 px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-white hover:text-red-500 hover:underline underline-offset-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default RedButton;
