import CoreFooter from "./CoreFooter";

type CoreLayoutProps = {
  children: React.ReactNode;
};
const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div>
      {children}
      {/* <CoreFooter /> */}
    </div>
  );
};

export default CoreLayout;
