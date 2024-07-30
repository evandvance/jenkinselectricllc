'use client';
import { FormEvent, ReactNode } from 'react';

interface RedButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

const RedButton = ({ onClick, className, children, type }: RedButtonProps) => {
  return (
    <button
      onClick={(event: FormEvent) => {
        event.preventDefault();
        if (onClick) onClick();
      }}
      type={type}
      className={`min-w-24 px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-white hover:text-red-500 hover:underline underline-offset-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default RedButton;
