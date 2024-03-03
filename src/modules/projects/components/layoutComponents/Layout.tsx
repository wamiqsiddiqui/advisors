import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex flex-row items-center justify-center">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
