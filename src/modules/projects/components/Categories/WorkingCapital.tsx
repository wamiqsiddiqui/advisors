import { useEffect, useState } from "react";
import {
  usePostWorkingCapital,
  usePostWorkingCapitalIndicators,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  getMappedWorkingCapitalRows,
  getMappedWorrkingCapitalEditableRows,
  setIndicatorsObjKeyValue,
  workingCapitalDataColumns,
  workingCapitalIndicatorsDataColumns,
} from "./FunctionsAndConstants";
import {
  Is_CRNT_ResponseType,
  WorkingCapitalIndicatorsResponseType,
  WorkingCapitalIndicatorsResponseTypeArray,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";

type WorkingCapitalProps = {
  Is_CRNT_Data: Is_CRNT_ResponseType;
  setWorkingCapitalData: (
    workingCapitalData: WorkingCapitalResponseType
  ) => void;
};

const WorkingCapital = ({
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
        Working Capital Key Indicators:
      </p>

      {isIndicatorsPending ? (
        <LoadingDataGrid columns={workingCapitalIndicatorsDataColumns} />
      ) : workingCapitalIndicatorsData &&
        workingCapitalIndicatorsData.data.length > 0 ? (
        <DataGrid
          columns={workingCapitalIndicatorsDataColumns}
          rows={getMappedWorrkingCapitalEditableRows({
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
      {isPending ? (
        <LoadingDataGrid columns={workingCapitalDataColumns} />
      ) : workingCapitalData && workingCapitalData.data.length > 0 ? (
        <DataGrid
          columns={workingCapitalDataColumns}
          rows={getMappedWorkingCapitalRows(workingCapitalData.data)}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default WorkingCapital;
