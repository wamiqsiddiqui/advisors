import { Link } from "react-router-dom";
import { sidebarItems } from "../../../../utilities/constants";
import { TfiArrowCircleLeft } from "../../../../utilities/icons";
import { SidebarStateType } from "../../../../types/generalTypes";

type SidebarProps = {
  state: SidebarStateType;
  onLeftArrowClick: () => void;
};
const Sidebar = ({ state, onLeftArrowClick }: SidebarProps) => {
  return (
    <div
      className={`group fixed top-0 left-0 z-10 bottom-0 transition-[width] bg-sky-800 hover:w-72 ${
        state !== "open" && "max-lg:w-0"
      } ${
        state == "open" ? "w-72" : state == "iconsOnly" ? "w-[60px]" : "w-0"
      } `}
    >
      <div
        className={`h-16 bg-blue-800 flex items-center py-0 group-hover:px-5 ${
          state === "open" ? "px-5" : "px-0"
        }`}
      >
        {/* <Link to="/">
          <img
            src={"/images/logo/logo-header.jpg"}
            width={150}
            height={150}
            alt="Advisors Logo"
          />
        </Link> */}
        {state == "open" && (
          <div className={`lg:hidden`} onClick={onLeftArrowClick}>
            <TfiArrowCircleLeft />
          </div>
        )}
      </div>
      <nav className="overflow-auto overflow-x-hidden pt-0 pb-2 bg-sky-400 h-[calc(100vh-64px)] adv__custom-scrollbar">
        <ul>
          {sidebarItems.map((item) => (
            <li className="px-0 py-0">
              <Link
                className="group flex flex-row items-center justify-start border-b-[1px] border-b-[#3e4456] p-3"
                to={item.link}
              >
                <span className="group-first-of-type:hover:text-white">
                  {item.icon}
                </span>
                <span className="ml-3 flex-1 text-blue-950 group-first-of-type:hover:text-white  whitespace-nowrap">
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
