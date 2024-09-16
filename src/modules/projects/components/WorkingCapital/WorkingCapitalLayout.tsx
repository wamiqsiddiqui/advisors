import { useEffect, useState } from "react";
import {
  usePostWorkingCapital,
  usePostWorkingCapitalIndicators,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";

import {
  Is_CRNT_ResponseType,
  WorkingCapitalIndicatorsResponseType,
  WorkingCapitalIndicatorsResponseTypeArray,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";
import { ToggleValue } from "../../../../types/generalTypes";
import CustomButton from "../../../core/components/CustomButton";
import {
  workingCapitalIndicatorsDataColumns,
  getMappedWorrkingCapitalEditableRows,
  setIndicatorsObjKeyValue,
  workingCapitalDataColumns,
  getMappedWorkingCapitalRows,
} from "../Categories/FunctionsAndConstants";

type WorkingCapitalProps = {
  Is_CRNT_Data: Is_CRNT_ResponseType;
  setWorkingCapitalData: (
    workingCapitalData: WorkingCapitalResponseType
  ) => void;
};

const WorkingCapitalLayout = ({
  Is_CRNT_Data,
  setWorkingCapitalData,
}: WorkingCapitalProps) => {
  const [selectedKeyIndex, setSelectedKeyIndex] = useState<{
    index: number;
    key: keyof WorkingCapitalIndicatorsResponseType;
  } | null>(null);
  const {
    mutate: postWorkingCapital,
    data: workingCapitalData,
    isPending,
    isError,
  } = usePostWorkingCapital();
  const {
    mutate: postWorkingCapitalIndicators,
    data: workingCapitalIndicatorsData,
    isPending: isIndicatorsPending,
    isError: isIndicatorsError,
  } = usePostWorkingCapitalIndicators();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");

  const [updatedIndicatorsData, setUpdatedIndicators] =
    useState<WorkingCapitalIndicatorsResponseTypeArray | null>(null);

  useEffect(() => {
    postWorkingCapitalIndicators(Is_CRNT_Data);
  }, []);
  useEffect(() => {
    if (workingCapitalIndicatorsData) {
      postWorkingCapital({
        is_crntData: Is_CRNT_Data,
        key_indicators_df: workingCapitalIndicatorsData.data,
      });
    }
  }, [workingCapitalIndicatorsData]);
  useEffect(() => {
    if (workingCapitalData) {
      setWorkingCapitalData(workingCapitalData.data);
    }
  }, [workingCapitalData]);

  return (
    <div>
      <p className="text-3xl font-normal text-start mb-4">
        Working Capital Key Indicators
      </p>
      {isIndicatorsPending ? (
        <LoadingDataGrid columns={workingCapitalIndicatorsDataColumns} />
      ) : workingCapitalIndicatorsData &&
        workingCapitalIndicatorsData.data.length > 0 ? (
        <DataGrid
          columns={workingCapitalIndicatorsDataColumns}
          rows={getMappedWorrkingCapitalEditableRows({
            toggleValue: "Absolute",
            workingCapitalIndicatorsData: workingCapitalIndicatorsData.data,
            onEditClick: (
              selectedIndex: number,
              selectedKey: keyof WorkingCapitalIndicatorsResponseType
            ) => {
              setSelectedKeyIndex({ index: selectedIndex, key: selectedKey });
            },
            onTextChange: (
              e: React.ChangeEvent<HTMLInputElement>,
              index: number,
              keyName: keyof WorkingCapitalIndicatorsResponseType
            ) => {
              const updatedAssumptionData = workingCapitalIndicatorsData.data;
              const finalUpdatedAssumptionData = setIndicatorsObjKeyValue({
                index: index,
                key: keyName,
                obj: updatedAssumptionData,
                value: Number(e.target.value),
              });
              setUpdatedIndicators(finalUpdatedAssumptionData);
            },
            onSaveClick: () => {
              setSelectedKeyIndex(null);
              if (updatedIndicatorsData) {
                postWorkingCapital({
                  is_crntData: Is_CRNT_Data,
                  key_indicators_df: updatedIndicatorsData,
                });
              }
            },
            selectedKeyIndex: selectedKeyIndex,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">
          Working Capital Actual Data
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
        <LoadingDataGrid columns={workingCapitalDataColumns} />
      ) : workingCapitalData && workingCapitalData.data.length > 0 ? (
        <DataGrid
          columns={workingCapitalDataColumns}
          rows={getMappedWorkingCapitalRows(
            workingCapitalData.data,
            expensesToggle
          )}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default WorkingCapitalLayout;
