import { useEffect } from "react";
import { usePostFixedAsset } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  fixedAssetDataColumns,
  getMappedFixedAssetRows,
} from "./FunctionsAndConstants";
import { AssumptionResponseType } from "../../../../types/FinancesType";

const FixedAsset = ({
  df_assumption,
}: {
  df_assumption: AssumptionResponseType[];
}) => {
  const {
    mutate: postFixedAsset,
    data: fixedAssetData,
    isPending,
    isError,
  } = usePostFixedAsset();
  useEffect(() => {
    postFixedAsset(df_assumption);
  }, []);
  return (
    <div>
      {isPending ? (
        <LoadingDataGrid columns={fixedAssetDataColumns} />
      ) : fixedAssetData && fixedAssetData.data.length > 0 ? (
        <DataGrid
          columns={fixedAssetDataColumns}
          rows={getMappedFixedAssetRows(fixedAssetData.data)}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default FixedAsset;
