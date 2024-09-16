import { PROJECT_ROUTES } from "../modules/projects/routes";
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
    subsection: [
      {
        subname: "Income Statement",
        sublink: PROJECT_ROUTES.incomeStatement,
      },
      {
        subname: "Working Capital",
        sublink: PROJECT_ROUTES.workingCapital,
      },
      {
        subname: "Debt",
        sublink: PROJECT_ROUTES.debt,
      },
      {
        subname: "Equity",
        sublink: PROJECT_ROUTES.equity,
      },
      {
        subname: "Fixed Asset",
        sublink: PROJECT_ROUTES.fixedAsset,
      },
      {
        subname: "Settings",
        sublink: "categories",
      },
      {
        subname: "Store Info",
        sublink: "/system/storeInfo",
      },
    ],
  },
  {
    name: "Customers",
    link: "customers",
    icon: <FaUsers className="adv__icon" />,
  },
  {
    name: "Product",
    link: "/product",
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
    link: "system",
  },
  {
    name: "Message",
    link: "message",
    icon: <FaComment className="adv__icon" />,
  },
  {
    name: "Feedback",
    link: "feedback",
    icon: <FaGift className="adv__icon" />,
  },
  {
    name: "Coupon",
    link: "coupon",
    icon: <FaGift className="adv__icon" />,
  },
];
