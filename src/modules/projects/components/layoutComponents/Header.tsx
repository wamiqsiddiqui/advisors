import { HiMenuAlt4 } from "../../../../utilities/icons";

type HeaderProps = {
  onMenuClick: () => void;
};
const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky right-0 top-0 bg-blue-900 h-16">
      <div
        className="flex-[2] flex items-center pl-2 cursor-pointer"
        onClick={onMenuClick}
      >
        <HiMenuAlt4 className="adv__icon" />
      </div>
    </header>
  );
};

export default Header;
