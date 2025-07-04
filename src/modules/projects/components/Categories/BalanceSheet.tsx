import { useEffect, useState } from "react";
import { usePostBalanceSheet } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  balanceSheetDataColumns,
  getMappedBalanceSheetRows,
} from "./FunctionsAndConstants";
import { WorkingCapitalResponseType } from "../../../../types/FinancesType";
import CustomButton from "../../../core/components/CustomButton";
import { ToggleValue } from "../../../../types/generalTypes";

const BalanceSheet = ({
  workingCapitalData,
}: {
  workingCapitalData: WorkingCapitalResponseType;
}) => {
  const {
    mutate: postBalanceSheet,
    data: balanceSheetData,
    isPending,
    isError,
  } = usePostBalanceSheet();
  useEffect(() => {
    postBalanceSheet(workingCapitalData);
  }, []);
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");

  return (
    <div>
      <div className="flex justify-between py-4">
        <p className="text-3xl font-normal text-start mb-4">
          Balance Sheet Actual Data
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
      {isPending ? (
        <LoadingDataGrid columns={balanceSheetDataColumns} />
      ) : balanceSheetData && balanceSheetData.data.length > 0 ? (
        <DataGrid
          columns={balanceSheetDataColumns}
          rows={getMappedBalanceSheetRows(
            balanceSheetData.data,
            expensesToggle
          )}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default BalanceSheet;
