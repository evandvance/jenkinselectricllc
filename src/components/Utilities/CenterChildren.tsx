import { ReactNode } from 'react';

interface CenterChildrenProps {
  children: ReactNode;
  className?: string;
  key?: string;
}

const CenterChildren = ({ children, className, key }: CenterChildrenProps) => {
  return (
    <div
      key={key}
      className={`flex justify-center items-center ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default CenterChildren;
