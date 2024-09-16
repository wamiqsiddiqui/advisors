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
  removeDuplicateAssumptionData,
  setObjKeyValue,
} from "./FunctionsAndConstants";
import CustomTabs from "../../../core/components/CustomTabs";
import WorkingCapital from "./WorkingCapital";
import DebtLayout from "../Debt/DebtLayout";
import EquityLayout from "../Equity/EquityLayout";
import FixedAssetLayout from "../FixedAsset/FixedAssetLayout";
import BalanceSheet from "./BalanceSheet";
import GA_Expenses from "./GA_Expenses";
import SM_Expenses from "./SM_Expenses";
import CustomButton from "../../../core/components/CustomButton";
import { ToggleValue } from "../../../../types/generalTypes";
import { localStorageKeys } from "../../../../utilities/localStorageKeys";

const CategoriesLayout = () => {
  const { data: assumptionData, isLoading, isError } = useGetFinances();
  const {
    mutate: mutateAssumptions,
    isPending: isCalculatedAssumptionsLoading,
    data: is_crntData,
  } = useGetCalculatedAssumptions();
  const [calculatedOnce, setCalculatedOnce] = useState<boolean>(false);
  const [workingCapitalData, setWorkingCapitalData] = useState<
    WorkingCapitalResponseType | undefined
  >();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");
  useEffect(() => {
    if (is_crntData?.data) {
      localStorage.setItem(
        localStorageKeys.is_crntData,
        JSON.stringify(is_crntData.data)
      );
    }
  }, [is_crntData]);
  useEffect(() => {
    if (assumptionData?.data) {
      localStorage.setItem(
        localStorageKeys.assumptionData,
        JSON.stringify(assumptionData.data)
      );
      if (!calculatedOnce) {
        setCalculatedOnce(true);
        mutateAssumptions(
          assumptionData.data.map((data) => {
            return {
              COMPONENT: data.COMPONENT,
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
      }
    }
  }, [assumptionData?.data]);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState<{
    index: number;
    key: keyof AssumptionResponseType;
  } | null>(null);
  const [updatedAssumptionData, setUpdatedAssumptionData] = useState<
    AssumptionResponseType[] | null
  >(null);
  return (
    <TitleBody title="Assumption">
      <div className="rounded-xl p-1 bg-transparent">
        {isError ? (
          <>Something went wrong</>
        ) : isLoading ? (
          <LoadingDataGrid columns={assumptionDataColumns} />
        ) : assumptionData && assumptionData.data.length > 0 ? (
          <DataGrid
            columns={assumptionDataColumns}
            rows={getMappedAssumptionRows({
              assumptionData: updatedAssumptionData
                ? updatedAssumptionData
                : assumptionData.data,
              selectedKeyIndex: selectedKeyIndex,
              onChange: (
                e: React.ChangeEvent<HTMLSelectElement>,
                index: number
              ) => {
                const uniqueData = removeDuplicateAssumptionData(
                  assumptionData.data
                );
                const updatedData = uniqueData;
                updatedData[index]["BASE"] = e.target.value;
                setUpdatedAssumptionData(updatedData);
                mutateAssumptions(
                  updatedData.map((data) => {
                    return {
                      COMPONENT: data.COMPONENT,
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
              onEditClick: (selectedIndex, selectedKey) => {
                setSelectedKeyIndex({ index: selectedIndex, key: selectedKey });
              },
              onSaveClick: () => {
                setSelectedKeyIndex(null);
                if (updatedAssumptionData) {
                  mutateAssumptions(
                    updatedAssumptionData.map((data) => {
                      return {
                        COMPONENT: data.COMPONENT,
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
                }
              },
              onTextChange: (
                e: React.ChangeEvent<HTMLInputElement>,
                index: number,
                keyName: keyof AssumptionResponseType
              ) => {
                const uniqueData = removeDuplicateAssumptionData(
                  assumptionData.data
                );
                const updatedAssumptionData = uniqueData;
                const finalUpdatedAssumptionData = setObjKeyValue({
                  index: index,
                  key: keyName,
                  obj: updatedAssumptionData,
                  value: Number(e.target.value),
                });
                setUpdatedAssumptionData(finalUpdatedAssumptionData);
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
            "GA Expenses",
            "SM Expenses",
          ]}
          tabChildren={[
            <div>
              <div className="flex justify-between my-4">
                <p className="text-3xl font-normal text-start mb-4">
                  Income Statement Actual Data
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

              {isCalculatedAssumptionsLoading ? (
                <LoadingDataGrid columns={calculatedAssumptionsColumns} />
              ) : is_crntData && is_crntData.data.length > 0 ? (
                <DataGrid
                  columns={Is_CRNT_DataColumns}
                  rows={getMappedIs_CRNT_Rows(is_crntData.data, expensesToggle)}
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
            <DebtLayout />,
            <EquityLayout />,
            isLoading ? (
              <>Loading...</>
            ) : assumptionData && assumptionData.data.length > 0 ? (
              <FixedAssetLayout df_assumption={assumptionData.data} />
            ) : (
              <>No Record Found!</>
            ),
            workingCapitalData && workingCapitalData.length > 0 ? (
              <BalanceSheet workingCapitalData={workingCapitalData} />
            ) : (
              <>No Record Found!</>
            ),
            <GA_Expenses />,
            <SM_Expenses />,
          ]}
        />
      </div>
    </TitleBody>
  );
};

export default CategoriesLayout;
