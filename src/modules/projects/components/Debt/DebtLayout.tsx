import { useState } from "react";
import { useGetDebt } from "../../../../services/finances";
import { ToggleValue } from "../../../../types/generalTypes";
import CustomButton from "../../../core/components/CustomButton";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  debtDataColumns,
  getMappedDebtRows,
} from "../Categories/FunctionsAndConstants";

const DebtLayout = () => {
  const { data: debtData, isLoading, isError } = useGetDebt();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");

  return (
    <div>
      <div className="flex justify-between py-4">
        <p className="text-3xl font-normal text-start mb-4">Debt Actual Data</p>
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
        <LoadingDataGrid columns={debtDataColumns} />
      ) : debtData && debtData.data.length > 0 ? (
        <DataGrid
          columns={debtDataColumns}
          rows={getMappedDebtRows({
            debtData: debtData.data,
            toggleValue: expensesToggle,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default DebtLayout;
