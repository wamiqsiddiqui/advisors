import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarItems } from "../../../../utilities/constants";
import { FaAngleRight, TfiArrowCircleLeft } from "../../../../utilities/icons";
import { SidebarStateType } from "../../../../types/generalTypes";
import logoWhite from "../../../../assets/images/logoWhite.png";
import logoWithBack from "../../../../assets/images/logoWhiteIconOnly.png";
import logoWhiteIconOnly from "../../../../assets/images/logoIconOnly.png";
import { useState } from "react";

type SidebarProps = {
  state: SidebarStateType;
  onLeftArrowClick: () => void;
};
const Sidebar = ({ state, onLeftArrowClick }: SidebarProps) => {
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div
      className={`group fixed top-0 left-0 z-10 bottom-0 transition-[width] bg-sky-800 hover:w-72 ${
        state !== "open" && "max-lg:w-0"
      } ${
        state == "open" ? "w-72" : state == "iconsOnly" ? "w-[60px]" : "w-0"
      } `}
    >
      <div
        className={`h-16 hover:w-72 bg-neoShades-sidebarBlack flex items-center py-0 group-hover:px-5 ${
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
      {/**bg-logoWhiteIconOnly bg-logo-icon bg-100% bg-top bg-no-repeat bg-blend-multiply  */}
      <nav
        className={`relative overflow-auto overflow-x-hidden pt-0 pb-2 bg-neoShades-sidebarBlack h-[calc(100vh-64px)] adv__custom-scrollbar`}
      >
        {/* <div className="absolute opacity-5 -left-5 -top-12 h-[700px] w-[115%]">
          <img className="w-full h-full" src={logoWhiteIconOnly} />
        </div> */}
        <ul className="absolute right-0 top-0 bottom-0 left-0 z-[10000]">
          {sidebarItems.map((item, index) => (
            <li className="px-0 py-0">
              <Link
                className={`group flex flex-row items-center justify-start 
                ${
                  location.pathname.includes(item.link)
                    ? `${
                        state == "iconsOnly"
                          ? "mr-[6px] rounded-r-full"
                          : "rounded-full m-2"
                      } bg-neoShades-sidebarSelectedBlue py-1 px-3`
                    : "p-3"
                }`}
                // to={item.link}
                to={item.subsection ? "" : item.link}
                onClick={
                  item.subsection
                    ? () => {
                        expandedIndex == index
                          ? setExpandedIndex(null)
                          : setExpandedIndex(index);
                      }
                    : undefined
                }
              >
                <span className="group-first-of-type:hover:text-white">
                  {item.icon}
                </span>
                <span className="ml-4 flex-1 text-start text-white group-first-of-type:hover:text-white  whitespace-nowrap">
                  {item.name}
                </span>
                {item.subsection && (
                  <FaAngleRight
                    className={`mbv__icon transition-all ${
                      expandedIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </Link>
              {item.subsection && (
                <ul
                  key={index}
                  className={`${
                    expandedIndex === index
                      ? "animate-dropdown"
                      : "animate-dropdownReverse hidden"
                  }`}
                >
                  {item.subsection.map((subItem, subIndex) => (
                    <li key={subIndex} className={`bg-[#262a35]`}>
                      <Link
                        to={subItem.sublink}
                        className="flex flex-row items-center justify-start border-b-[1px] border-b-[#3e4456] p-3"
                      >
                        <span className="ml-12 flex-1 text-[#99abb4] whitespace-nowrap">
                          {subItem.subname}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

/**
 * import Image from "next/image"
import { sidebarItems } from "../utils/constants"
import { SlidebarState } from "@/types/general"
import { FaAngleRight, TfiArrowCircleLeft } from "@/utils"
import { useState } from "react"
import Link from "next/link"

type SidebarProps = {
  state: SlidebarState
  onLeftArrowClick: () => void
}
const Sidebar = ({ state, onLeftArrowClick }: SidebarProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  return (
    <div
      className={`group fixed top-0 left-0 z-10 bottom-0 transition-[width] bg-[#313644] hover:w-72 ${
        state !== "open" && "max-lg:w-0"
      } ${
        state == "open" ? "w-72" : state == "iconsOnly" ? "w-[60px]" : "w-0"
      } `}
    >
      <div
        className={`h-16 bg-white flex items-center py-0 group-hover:px-5 ${
          state === "open" ? "px-5" : "px-0"
        }`}
      >
        <Link href="/dashboard">
          <Image
            src={"/images/logo/logo-header.jpg"}
            width={150}
            height={150}
            alt="Menabev Logo"
          />
        </Link>
        {state == "open" && (
          <div className={`lg:hidden`} onClick={onLeftArrowClick}>
            <TfiArrowCircleLeft />
          </div>
        )}
      </div>
      <nav className="overflow-auto overflow-x-hidden pt-8 pb-2 bg-[#313644] h-[calc(100vh-64px)] mbv__custom-scrollbar">
        <ul className="h-[100%]">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                key={`Link${index}`}
                href={item.subsection ? "" : item.link}
                onClick={
                  item.subsection
                    ? () => {
                        expandedIndex == index
                          ? setExpandedIndex(null)
                          : setExpandedIndex(index)
                      }
                    : undefined
                }
                className="group flex flex-row items-center justify-start border-b-[1px] border-b-[#3e4456] p-3"
              >
                <span className="group-first-of-type:hover:text-[#0f9aee]">
                  {item.icon}
                </span>
                <span className="ml-3 flex-1 text-[#99abb4] group-first-of-type:hover:text-white  whitespace-nowrap">
                  {item.name}
                </span>
                {item.subsection && (
                  <FaAngleRight
                    className={`mbv__icon transition-all ${
                      expandedIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </Link>
              {item.subsection && (
                <ul
                  key={index}
                  className={`${
                    expandedIndex === index
                      ? "animate-dropdown"
                      : "animate-dropdownReverse hidden"
                  }`}
                >
                  {item.subsection.map((subItem, subIndex) => (
                    <li key={subIndex} className={`bg-[#262a35]`}>
                      <Link
                        href={subItem.sublink}
                        className="flex flex-row items-center justify-start border-b-[1px] border-b-[#3e4456] p-3"
                      >
                        <span className="ml-12 flex-1 text-[#99abb4] whitespace-nowrap">
                          {subItem.subname}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

 * 
 */
