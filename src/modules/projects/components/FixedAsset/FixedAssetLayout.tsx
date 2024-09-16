import { useEffect, useState } from "react";
import { usePostFixedAsset } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  fixedAssetDataColumns,
  getMappedFixedAssetRows,
} from "../Categories/FunctionsAndConstants";
import { AssumptionResponseType } from "../../../../types/FinancesType";
import CustomButton from "../../../core/components/CustomButton";
import { ToggleValue } from "../../../../types/generalTypes";

const FixedAssetLayout = ({
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
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");

  return (
    <div>
      <div className="flex justify-between py-4">
        <p className="text-3xl font-normal text-start mb-4">
          Fixed Asset Actual Data
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
        <LoadingDataGrid columns={fixedAssetDataColumns} />
      ) : fixedAssetData && fixedAssetData.data.length > 0 ? (
        <DataGrid
          columns={fixedAssetDataColumns}
          rows={getMappedFixedAssetRows(fixedAssetData.data, expensesToggle)}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default FixedAssetLayout;
