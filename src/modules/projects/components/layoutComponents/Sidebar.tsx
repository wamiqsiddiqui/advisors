import { Link, useNavigate } from "react-router-dom";
import { sidebarItems } from "../../../../utilities/constants";
import { TfiArrowCircleLeft } from "../../../../utilities/icons";
import { SidebarStateType } from "../../../../types/generalTypes";
import logoWhite from "../../../../assets/images/logoWhite.png";
import logoWithBack from "../../../../assets/images/logoWhiteIconOnly.png";
import logoWhiteIconOnly from "../../../../assets/images/logoIconOnly.png";

type SidebarProps = {
  state: SidebarStateType;
  onLeftArrowClick: () => void;
};
const Sidebar = ({ state, onLeftArrowClick }: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`group fixed top-0 left-0 z-10 bottom-0 transition-[width] bg-sky-800 hover:w-72 ${
        state !== "open" && "max-lg:w-0"
      } ${
        state == "open" ? "w-72" : state == "iconsOnly" ? "w-[60px]" : "w-0"
      } `}
    >
      <div
        className={`h-16 hover:w-72 bg-primary-darkBlue flex items-center py-0 group-hover:px-5 ${
          state === "open" ? "px-5" : "px-0"
        }`}
      >
        <a className="cursor-pointer" href={"/"}>
          <img src={logoWhite} />
        </a>
        {state == "open" && (
          <div className={`lg:hidden`} onClick={onLeftArrowClick}>
            <TfiArrowCircleLeft />
          </div>
        )}
      </div>
      <nav
        className={`relative bg-logoWhiteIconOnly bg-logo-icon bg-100% bg-top bg-no-repeat bg-blend-normal overflow-auto overflow-x-hidden pt-0 pb-2 bg-primary-darkBlue h-[calc(100vh-64px)] adv__custom-scrollbar`}
      >
        {/* <div className="absolute opacity-15 -left-5 -top-10 h-[700px] w-[115%]">
          <img className="w-full h-full" src={logoWhiteIconOnly} />
        </div> */}
        <ul className="z-[10000]">
          {sidebarItems.map((item) => (
            <li className="px-0 py-0">
              <Link
                className="group flex flex-row items-center justify-start border-b-[1px] border-b-primary-lightBlue p-3"
                to={item.link}
              >
                <span className="group-first-of-type:hover:text-white">
                  {item.icon}
                </span>
                <span className="ml-3 flex-1 text-white group-first-of-type:hover:text-white  whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
