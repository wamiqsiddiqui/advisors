import { useEffect, useState } from "react";
import CustomButton from "../../../core/components/CustomButton";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  Is_CRNT_DataColumns,
  assumptionDataColumns,
  calculatedAssumptionsColumns,
  getMappedAssumptionRows,
  getMappedIs_CRNT_Rows,
  removeDuplicateAssumptionData,
  setObjKeyValue,
} from "../Categories/FunctionsAndConstants";
import { ToggleValue } from "../../../../types/generalTypes";
import {
  useGetCalculatedAssumptions,
  useGetFinances,
} from "../../../../services/finances";
import { AssumptionResponseType } from "../../../../types/FinancesType";

const IncomeStatementLayout = () => {
  const { data: assumptionData, isLoading, isError } = useGetFinances();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");
  const [calculatedOnce, setCalculatedOnce] = useState<boolean>(false);

  const {
    mutate: mutateAssumptions,
    isPending: isCalculatedAssumptionsLoading,
    data: is_crntData,
  } = useGetCalculatedAssumptions();

  useEffect(() => {
    if (assumptionData?.data && !calculatedOnce) {
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
  }, [assumptionData?.data]);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState<{
    index: number;
    key: keyof AssumptionResponseType;
  } | null>(null);
  const [updatedAssumptionData, setUpdatedAssumptionData] = useState<
    AssumptionResponseType[] | null
  >(null);
  return (
    <div>
      <div className="">
        <p className="text-3xl font-normal text-start mb-4">
          Income Statement Actual Data
        </p>
        <div className="flex justify-end gap-4 my-4">
          <CustomButton
            width="w-28"
            text={"Absolute"}
            onClick={() => setToggle("Absolute")}
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
      </div>
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
    </div>
  );
};

export default IncomeStatementLayout;
