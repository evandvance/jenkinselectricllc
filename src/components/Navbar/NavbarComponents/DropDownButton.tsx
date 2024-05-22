import DropDownLinks from './DropDownLinks';
import { DropdownItemsInterface } from './DropDownItemsInterface';

interface DropDownButtonProps {
  title: string;
  className?: string;
  childrenClassName?: string;
  dropdownItems: Array<DropdownItemsInterface>;
}

const DropdownButton = ({
  title,
  className,
  dropdownItems,
  childrenClassName,
}: DropDownButtonProps) => {
  return (
    <div
      className={`mx-2 group relative inline-block hover:cursor-pointer ${
        className ? className : ''
      }`}
    >
      <div className="p-2">{title}</div>
      <DropDownLinks
        dropdownItems={dropdownItems}
        className={childrenClassName}
      />
    </div>
  );
};

export default DropdownButton;
