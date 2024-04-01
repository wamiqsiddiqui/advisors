import { HiMenuAlt4, PiSignOutBold } from "../../../../utilities/icons";
import logoWhiteIconOnly from "../../../../assets/images/logoIconOnly.png";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  onMenuClick: () => void;
};
const Header = ({ onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="sticky z-50 shadow-div right-0 top-0 bg-primary-bgBlack h-16">
      {/* <div className="absolute opacity-15 rotate-180 -left-20 -top-7 h-[150%] w-[100%]">
        <img className="w-full h-full" src={logoWhiteIconOnly} />
      </div> */}
      <div className="relative h-full flex-[2] flex justify-between items-center pl-2">
        <div onClick={onMenuClick}>
          <HiMenuAlt4 className="cursor-pointer adv__icon" />
        </div>
        <div
          className="cursor-pointer flex items-center rounded-full bg-white p-1 mr-2"
          onClick={() => navigate("/advisors/login")}
        >
          <PiSignOutBold className="adv__icon__darkBlue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
