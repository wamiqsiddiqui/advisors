export type SidebarItemType = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export type SidebarStateType = "open" | "iconsOnly" | "closed";

export type ColumnTypes = {
  name: string;
  minWidth: string;
};
