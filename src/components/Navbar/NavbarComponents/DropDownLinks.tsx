import Link from 'next/link';
import { DropdownItemsInterface } from './DropDownItemsInterface';

interface DropDownLinkInterface {
  dropdownItems: Array<DropdownItemsInterface>;
  className?: string;
}

const DropDownLinks = ({ dropdownItems, className }: DropDownLinkInterface) => {
  return (
    <div className="group hidden z-50 absolute group-hover:inline-block">
      <div className="my-2 min-w-fit border rounded z-auto bg-black">
        {dropdownItems.map((item: DropdownItemsInterface) => (
          <Link
            key={item.title}
            className={`block p-2 min-w-max z-auto text-white ${
              className ? className : ''
            }`}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownLinks;
