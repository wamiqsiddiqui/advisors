import { useEffect, useState } from "react";
import {
  useGetCalculatedAssumptions,
  useGetFinances,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import { AssumptionDataType } from "../../../../types/FinancesType";
import TitleBody from "../../../core/components/TitleBody";
import {
  assumptionDataColumns,
  calculatedAssumptionsColumns,
  getMappedAssumptionRows,
  getMappedCalculatedAssumptionsRows,
} from "./FunctionsAndConstants";
import CustomTabs from "../../../core/components/CustomTabs";

const CategoriesLayout = () => {
  const { data: assumptionData, isLoading, isError } = useGetFinances();
  const [selectedAssumption, setSelectedAssumption] = useState<
    AssumptionDataType | undefined
  >();
  const {
    mutate: mutateAssumptions,
    isPending: isCalculatedAssumptionsLoading,
    data: calculatedAssumptionsData,
  } = useGetCalculatedAssumptions();
  const [checked, setChecked] = useState<boolean[]>([]);
  const [calculatedOnce, setCalculatedOnce] = useState<boolean>(false);
  useEffect(() => {
    if (
      assumptionData?.data &&
      (checked.length === 0 || checked.length !== assumptionData.data.length)
    )
      setChecked(Array(assumptionData?.data.length ?? 0).fill(false));
  }, [assumptionData?.data]);
  return (
    <TitleBody title="Categories">
      <div className="rounded-xl p-1 bg-primary-bgBlack">
        {isError ? (
          <>Something went wrong</>
        ) : isLoading ? (
          <LoadingDataGrid columns={assumptionDataColumns} />
        ) : assumptionData && assumptionData.data.length > 0 ? (
          <DataGrid
            columns={assumptionDataColumns}
            rows={getMappedAssumptionRows({
              assumptionData: assumptionData.data,
              checked,
              isCalculatedAssumptionsLoading,
              selectedAssumption,
              onChange: async (index: number) => {
                const previousVal = checked[index];
                let newChecked = Array(assumptionData?.data.length ?? 0).fill(
                  false
                );
                newChecked[index] = !previousVal;
                setChecked(newChecked);
                if (!calculatedOnce) setCalculatedOnce(true);
                mutateAssumptions(
                  assumptionData.data.map((data) => {
                    return {
                      "COMPONENT ": data["COMPONENT "],
                      BASE: data.BASE,
                      Select: data.Select,
                      "2018": data[2018],
                      "2019": data[2019],
                      "2020": data[2020],
                      "2021": data[2021],
                      "2022": data[2022],
                      "2023": data[2023],
                      "2024": data[2024],
                      "2025": data[2025],
                      "2026": data[2026],
                      "2027": data[2027],
                    };
                  })
                );
              },
            })}
          />
        ) : (
          <>No Record Found!</>
        )}

        <CustomTabs
          tabTitles={["Income Statement", "Balance Sheet", "General Ledger"]}
          tabChildren={[
            <div>
              {isCalculatedAssumptionsLoading ? (
                <LoadingDataGrid columns={calculatedAssumptionsColumns} />
              ) : calculatedAssumptionsData &&
                calculatedAssumptionsData.data.length > 0 ? (
                <DataGrid
                  columns={calculatedAssumptionsColumns}
                  rows={getMappedCalculatedAssumptionsRows(
                    calculatedAssumptionsData.data
                  )}
                />
              ) : (
                calculatedOnce && <>No Record Found!</>
              )}
            </div>,
            <div>Tab Child 2</div>,
            <div>Tab Child 3</div>,
          ]}
        />
      </div>
    </TitleBody>
  );
};

export default CategoriesLayout;
