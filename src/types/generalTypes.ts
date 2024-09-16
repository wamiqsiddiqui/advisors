export type SidebarItemType = {
  name: string;
  link: string;
  icon: JSX.Element;
  subsection?: {
    subname: string;
    sublink: string;
  }[];
};

export type SidebarStateType = "open" | "iconsOnly" | "closed";

export type ColumnTypes = {
  name: string;
  minWidth: string;
};

export type ToggleValue = "Absolute" | "Thousands" | "Millions";
