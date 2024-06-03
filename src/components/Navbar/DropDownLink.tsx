'use client';
import { useState } from 'react';
import Link from 'next/link';

interface DropDownLinkProps {
  className?: string;
  title: string;
  onClick?: () => void;
  dropDownLinks: DropDownLinks[];
}

export interface DropDownLinks {
  title: string;
  href: string;
}

const DropDownLink = ({
  className,
  title,
  dropDownLinks,
  onClick,
}: DropDownLinkProps) => {
  const [isLinksShown, setIsLinksShown] = useState(false);

  return (
    <div className={`cursor-pointer ${className ? className : ''}`}>
      <p
        className="hover:text-jellcblue"
        onClick={() => setIsLinksShown(!isLinksShown)}
      >
        {title}
      </p>

      {isLinksShown && (
        <ul>
          {dropDownLinks.map((item) => {
            return (
              <li key={item.title} className="m-2">
                <Link
                  onClick={() => {
                    if (onClick) {
                      onClick();
                    }
                    setIsLinksShown(!isLinksShown);
                  }}
                  className="hover:text-jellcblue"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDownLink;
