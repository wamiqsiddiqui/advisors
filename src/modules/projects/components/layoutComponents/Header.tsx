import { HiMenuAlt4, PiSignOutBold } from "../../../../utilities/icons";
import logoWhiteIconOnly from "../../../../assets/images/logoIconOnly.png";

type HeaderProps = {
  onMenuClick: () => void;
};
const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky right-0 top-0 bg-primary-darkBlue h-16">
      {/* <div className="absolute opacity-15 rotate-180 -left-20 -top-7 h-[150%] w-[100%]">
        <img className="w-full h-full" src={logoWhiteIconOnly} />
      </div> */}
      <div
        className="relative h-full flex-[2] flex justify-between items-center pl-2 cursor-pointer"
        onClick={onMenuClick}
      >
        <HiMenuAlt4 className="adv__icon" />
        <div className="flex items-center rounded-full bg-white p-1 mr-2">
          <PiSignOutBold className="adv__icon__darkBlue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
