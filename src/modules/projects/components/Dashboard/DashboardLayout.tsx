import { FaUnlock } from "../../../../utilities/icons";
import { mockStocksData } from "../../../../utilities/mockData";
import BarsDataset from "../../../core/components/BarChart";
import BasicBars from "../../../core/components/Charts/BarChart2";
import BasicArea from "../../../core/components/Charts/LineChart";
import PieActiveArc from "../../../core/components/Charts/PieCharts";
import DataGrid from "../../../core/components/DataGrid";
import TitleBody from "../../../core/components/TitleBody";

const DashboardLayout = () => {
  return (
    <TitleBody
      title="Dashboard"
      subtitle="Visualize your Financial Statistics with ease and few clicks"
    >
      <div className="md:grid gap-3 md:grid-cols-3 max-md:flex max-md:flex-col">
        <div className="h-40 md:flex-1 rounded-xl bg-neoShades-sidebarSelectedBlue">
          <div className="h-full flex items-center ">
            <PieActiveArc />
          </div>
        </div>
        <div className="h-40 md:flex-1 rounded-xl bg-neoShades-dashboardPanel2">
          <div className="h-full flex items-center ">
            <BasicArea />
          </div>
        </div>
        <div className="h-40 md:flex-1 rounded-xl bg-neoShades-dashboardPanel3">
          <div className="h-full flex items-center ">
            <BasicBars />
          </div>
        </div>
        <div className="h-96 flex flex-col rounded-xl p-1 bg-neoShades-innerComponentsGray">
          <p className="text-xl font-thin">Last Financial Data</p>
          <DataGrid
            columns={[
              { name: "Company", minWidth: "10%" },
              { name: "Symbol", minWidth: "10%" },
              { name: "Status", minWidth: "10%" },
              { name: "Action", minWidth: "10%" },
            ]}
            rows={mockStocksData.map((data) => {
              return {
                company: data.company,
                symbol: data.symbol,
                status: data.status,
                actions: { icon: <FaUnlock className="adv__icon" /> },
              };
            })}
          />
        </div>

        <div className="h-96 md:flex-1 md:col-span-2 rounded-xl bg-neoShades-innerComponentsGray shadow-div">
          <BarsDataset />
        </div>
      </div>
    </TitleBody>
  );
};

export default DashboardLayout;
