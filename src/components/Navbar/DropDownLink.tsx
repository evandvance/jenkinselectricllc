'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DropDownLinkProps {
  className?: string;
  title: string;
  onClick?: () => void;
  useAnchortags?: boolean;
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
  useAnchortags,
}: DropDownLinkProps) => {
  const [isLinksShown, setIsLinksShown] = useState(false);

  const handleLinksShown = () => setIsLinksShown(!isLinksShown);

  useEffect(() => {
    const handleResizeEvent = () => {
      const LARGE_WINDOW_WIDTH = 1024;
      //This was added because I was strugling with figuring out how to do mouseleave consitently
      const handleMouseLeave = () => setIsLinksShown(false);

      const dropDownLink = document.getElementById(title);

      if (window.innerWidth > LARGE_WINDOW_WIDTH) {
        dropDownLink?.addEventListener('mouseenter', handleLinksShown);
        dropDownLink?.addEventListener('mouseleave', handleMouseLeave);
      } else {
        dropDownLink?.removeEventListener('mouseenter', handleLinksShown);
        dropDownLink?.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    handleResizeEvent();
    window.addEventListener('resize', handleResizeEvent);
  }, []);

  return (
    <div id={title} className={`${className ? className : ''}`}>
      <p
        className="cursor-pointer hover:text-jellcblue"
        onClick={handleLinksShown}
      >
        {title}
      </p>

      {isLinksShown && (
        <ul className="lg:absolute bg-black lg:border lg:rounded lg:border-white lg:mt-2 lg:space-y-3 pb-1">
          {dropDownLinks.map((item) => {
            return (
              <li key={item.title} className="m-2">
                {useAnchortags ? (
                  <a
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
                  </a>
                ) : (
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
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDownLink;
