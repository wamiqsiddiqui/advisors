import { useEffect, useState } from "react";
import {
  useGetCalculatedAssumptions,
  useGetFinances,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  AssumptionResponseType,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";
import TitleBody from "../../../core/components/TitleBody";
import {
  Is_CRNT_DataColumns,
  assumptionDataColumns,
  calculatedAssumptionsColumns,
  getMappedAssumptionRows,
  getMappedIs_CRNT_Rows,
} from "./FunctionsAndConstants";
import CustomTabs from "../../../core/components/CustomTabs";
import WorkingCapital from "./WorkingCapital";
import Debt from "./Debt";
import Equity from "./Equity";
import FixedAsset from "./FixedAsset";
import BalanceSheet from "./BalanceSheet";

const CategoriesLayout = () => {
  const { data: assumptionData, isLoading, isError } = useGetFinances();
  const [selectedAssumption, setSelectedAssumption] = useState<
    AssumptionResponseType | undefined
  >();
  const {
    mutate: mutateAssumptions,
    isPending: isCalculatedAssumptionsLoading,
    data: is_crntData,
  } = useGetCalculatedAssumptions();
  const [checked, setChecked] = useState<boolean[]>([]);
  const [calculatedOnce, setCalculatedOnce] = useState<boolean>(false);
  const [workingCapitalData, setWorkingCapitalData] = useState<
    WorkingCapitalResponseType | undefined
  >();
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
          tabTitles={[
            "Income Statement",
            "Working Capital",
            "Debt",
            "Equity",
            "Fixed Asset",
            "Balance Sheet",
          ]}
          tabChildren={[
            <div>
              {isCalculatedAssumptionsLoading ? (
                <LoadingDataGrid columns={calculatedAssumptionsColumns} />
              ) : is_crntData && is_crntData.data.length > 0 ? (
                <DataGrid
                  columns={Is_CRNT_DataColumns}
                  rows={getMappedIs_CRNT_Rows(is_crntData.data)}
                />
              ) : (
                calculatedOnce && <>No Record Found!</>
              )}
            </div>,
            isCalculatedAssumptionsLoading ? (
              <>Loading...</>
            ) : is_crntData && is_crntData.data.length > 0 ? (
              <WorkingCapital
                Is_CRNT_Data={is_crntData!.data}
                setWorkingCapitalData={(workingCapitalData) => {
                  setWorkingCapitalData(workingCapitalData);
                }}
              />
            ) : (
              calculatedOnce && <>No Record Found!</>
            ),
            <Debt />,
            <Equity />,
            isLoading ? (
              <>Loading...</>
            ) : assumptionData && assumptionData.data.length > 0 ? (
              <FixedAsset df_assumption={assumptionData.data} />
            ) : (
              <>No Record Found!</>
            ),
            workingCapitalData && workingCapitalData.length > 0 ? (
              <BalanceSheet workingCapitalData={workingCapitalData} />
            ) : (
              <>No Record Found!</>
            ),
          ]}
        />
      </div>
    </TitleBody>
  );
};

export default CategoriesLayout;
