import { useGetDebt } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import { debtDataColumns, getMappedDebtRows } from "./FunctionsAndConstants";

const Debt = () => {
  const { data: debtData, isLoading, isError } = useGetDebt();
  return (
    <div>
      {isLoading ? (
        <LoadingDataGrid columns={debtDataColumns} />
      ) : debtData && debtData.data.length > 0 ? (
        <DataGrid
          columns={debtDataColumns}
          rows={getMappedDebtRows({
            debtData: debtData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default Debt;
