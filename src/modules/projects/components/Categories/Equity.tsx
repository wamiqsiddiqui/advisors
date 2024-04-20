import { useGetEquity } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  equityDataColumns,
  getMappedEquityRows,
} from "./FunctionsAndConstants";

const Equity = () => {
  const { data: equityData, isLoading, isError } = useGetEquity();
  return (
    <div>
      {isLoading ? (
        <LoadingDataGrid columns={equityDataColumns} />
      ) : equityData && equityData.data.length > 0 ? (
        <DataGrid
          columns={equityDataColumns}
          rows={getMappedEquityRows({
            equityData: equityData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default Equity;
