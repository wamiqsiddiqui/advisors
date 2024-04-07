import { useState } from "react";

type CustomTabsProps = {
  tabTitles: string[];
  tabChildren: React.ReactNode[];
};
const CustomTabs = ({ tabTitles, tabChildren }: CustomTabsProps) => {
  if (tabTitles.length !== tabChildren.length) {
    throw new Error(
      "tabTitles lenght must be equal to tabChildren length in CustomTabs.tsx"
    );
  }
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedDelayedTab, setSelectedDelayedTab] = useState<number>(0);
  const getTranslateX = () => {
    return `-${selectedTab}00%`;
  };
  return (
    <div className="flex flex-col mt-4 pb-10 w-full">
      <div className="flex bg-grayShades-alternateGray pt-8 px-6">
        {tabTitles.map((tab, index) => (
          <div
            onClick={() => {
              setSelectedTab(index);
              setTimeout(() => {
                setSelectedDelayedTab(index);
              }, 800);
            }}
            className={`${
              selectedTab === index
                ? "bg-neoShades-dashboardPanel3"
                : "bg-neoShades-innerComponentsGray"
            } p-6 mr-2 cursor-pointer`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="flex h-min overflow-hidden">
        {tabChildren.map((tabChild, index) => (
          <div
            style={{ transform: `translateX(${getTranslateX()})` }}
            className={`shrink-0 w-full transition-all duration-1000 h-max `}
          >
            <div
              className={`bg-neoShades-dashboardPanel3 min-h-24 p-6 ${
                selectedDelayedTab !== index && "h-24"
              }`}
            >
              {tabChild}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
