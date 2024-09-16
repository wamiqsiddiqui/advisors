import { useState } from "react";
import Header from "./Header";
import { SidebarStateType } from "../../../../types/generalTypes";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [sidebarState, setSidebarState] = useState<SidebarStateType>("open");
  return (
    <div>
      <Sidebar
        onLeftArrowClick={() => setSidebarState("open")}
        state={sidebarState}
      />
      <div
        className={`max-lg:ml-0 ${
          sidebarState == "open" ? "ml-72" : "ml-[60px]"
        }
`}
      >
        <Header
          onMenuClick={() => {
            setSidebarState(sidebarState === "open" ? "iconsOnly" : "open");
          }}
        />
        <div className="min-h-[calc(100vh-64px)] bg-neoShades-dashboardHeaderBgBlack text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
