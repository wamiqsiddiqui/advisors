import { FaUnlock } from "../../../../utilities/icons";
import { mockStocksData } from "../../../../utilities/mockData";
import BarsDataset from "../../../core/components/BarChart";
import DataGrid from "../../../core/components/DataGrid";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col p-6">
      <p className="text-5xl font-thin text-start mb-4">Dashboard</p>
      <div className="md:grid gap-3 md:grid-cols-3 max-md:flex max-md:flex-col">
        <div className="h-40 md:flex-1 rounded-xl bg-primary-bgBlack"></div>
        <div className="h-40 md:flex-1 rounded-xl bg-primary-bgBlack"></div>
        <div className="h-40 md:flex-1 rounded-xl bg-primary-bgBlack"></div>
        <div className="h-96 flex flex-col rounded-xl p-1 bg-primary-bgBlack">
          <p>Last Financial Data</p>
          <DataGrid
            columns={[
              { name: "Company", minWidth: "10%" },
              { name: "description", minWidth: "30%" },
              { name: "Initial Price", minWidth: "10%" },
              { name: "Price In 2002", minWidth: "10%" },
              { name: "Price In 2007", minWidth: "10%" },
              { name: "Symbol", minWidth: "10%" },
              { name: "Status", minWidth: "10%" },
              { name: "Action", minWidth: "10%" },
            ]}
            rows={mockStocksData.map((data) => {
              return {
                company: data.company,
                description: data.description,
                initial_price: data.initial_price,
                price_2002: data.price_2002,
                price_2007: data.price_2007,
                symbol: data.symbol,
                status: data.status,
                actions: { icon: <FaUnlock className="adv__icon" /> },
              };
            })}
          />
        </div>

        <div className="h-96 md:flex-1 md:col-span-2 rounded-xl bg-primary-bgBlack">
          <BarsDataset />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
