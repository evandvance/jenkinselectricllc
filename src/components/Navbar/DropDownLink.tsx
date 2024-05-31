'use client';
import { useState } from 'react';
import Link from 'next/link';

interface DropDownLinkProps {
  className?: string;
  title: string;
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
              <li className="m-2">
                <Link className="hover:text-jellcblue" href={item.href}>
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
