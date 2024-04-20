import { useEffect } from "react";
import { usePostBalanceSheet } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  balanceSheetDataColumns,
  getMappedBalanceSheetRows,
} from "./FunctionsAndConstants";
import { WorkingCapitalResponseType } from "../../../../types/FinancesType";

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
  return (
    <div>
      {isPending ? (
        <LoadingDataGrid columns={balanceSheetDataColumns} />
      ) : balanceSheetData && balanceSheetData.data.length > 0 ? (
        <DataGrid
          columns={balanceSheetDataColumns}
          rows={getMappedBalanceSheetRows(balanceSheetData.data)}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default BalanceSheet;
