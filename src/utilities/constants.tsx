import { SidebarItemType } from "../types/generalTypes";
import {
  FaBicycle,
  FaComment,
  FaFile,
  FaGift,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaTags,
  FaUsers,
  TfiServer,
  TiDropbox,
} from "./icons";

export const sidebarItems: SidebarItemType[] = [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <FaTachometerAlt className="adv__icon" />,
  },
  {
    name: "Sales Report",
    link: "salesreport",
    icon: <FaFile className="adv__icon" />,
  },
  {
    name: "Cli",
    link: "deliveryzone",
    icon: <FaMapMarkerAlt className="adv__icon" />,
  },
  {
    name: "Client Listing",
    link: "categories",
    icon: <FaTags className="adv__icon" />,
  },
  {
    name: "Customers",
    link: "customers",
    icon: <FaUsers className="adv__icon" />,
  },
  {
    name: "Product",
    link: "/",
    icon: <TfiServer className="adv__icon" />,
  },
  {
    name: "Rider",
    link: "rider",
    icon: <FaBicycle className="adv__icon" />,
  },
  {
    name: "Order",
    link: "order",
    icon: <FaShoppingCart className="adv__icon" />,
  },
  {
    name: "Bottlers",
    link: "bottlers",
    icon: <TiDropbox className="adv__icon" />,
  },
  {
    name: "Promotions",
    link: "promotions",
    icon: <TiDropbox className="adv__icon" />,
  },
  {
    icon: <TfiServer className="adv__icon" />,
    name: "System",
    link: "",
  },
  {
    name: "Message",
    link: "",
    icon: <FaComment className="adv__icon" />,
  },
  {
    name: "Feedback",
    link: "feedback",
    icon: <FaGift className="adv__icon" />,
  },
  {
    name: "Coupon",
    link: "",
    icon: <FaGift className="adv__icon" />,
  },
];
