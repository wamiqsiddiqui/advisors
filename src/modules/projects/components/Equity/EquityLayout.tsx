import { useState } from "react";
import { useGetEquity } from "../../../../services/finances";
import CustomButton from "../../../core/components/CustomButton";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  equityDataColumns,
  getMappedEquityRows,
} from "../Categories/FunctionsAndConstants";
import { ToggleValue } from "../../../../types/generalTypes";

const EquityLayout = () => {
  const { data: equityData, isLoading, isError } = useGetEquity();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");

  return (
    <div>
      <div className="flex justify-between py-4">
        <p className="text-3xl font-normal text-start mb-4">
          Equity Actual Data
        </p>
        <div className="flex gap-3">
          <CustomButton
            width="w-28"
            text={"Absolute"}
            onClick={() => {
              setToggle("Absolute");
            }}
          />
          <CustomButton
            width="w-28"
            text={"Millions"}
            onClick={() => setToggle("Millions")}
          />
          <CustomButton
            width="w-28"
            text={"Thousands"}
            onClick={() => setToggle("Thousands")}
          />
        </div>
      </div>
      {isLoading ? (
        <LoadingDataGrid columns={equityDataColumns} />
      ) : equityData && equityData.data.length > 0 ? (
        <DataGrid
          columns={equityDataColumns}
          rows={getMappedEquityRows({
            equityData: equityData.data,
            toggleValue: expensesToggle,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default EquityLayout;
