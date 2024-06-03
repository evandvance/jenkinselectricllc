'use client';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (window.innerWidth > 1024) {
      const dropDownLink = document.getElementById(title);

      dropDownLink?.addEventListener('mouseenter', () => {
        setIsLinksShown(true);
      });

      dropDownLink?.addEventListener('mouseleave', () => {
        setIsLinksShown(false);
      });
    }
  }, []);

  return (
    <div id={title} className={`${className ? className : ''}`}>
      <p
        className="cursor-pointer hover:text-jellcblue"
        onClick={() => setIsLinksShown(!isLinksShown)}
      >
        {title}
      </p>

      {isLinksShown && (
        <ul className="absolute bg-black lg:border lg:rounded lg:border-white lg:mt-2 lg:space-y-3 pb-1">
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
