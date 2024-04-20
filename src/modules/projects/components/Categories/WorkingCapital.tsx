import { useEffect } from "react";
import { usePostWorkingCapital } from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  getMappedWorkingCapitalRows,
  workingCapitalDataColumns,
} from "./FunctionsAndConstants";
import {
  Is_CRNT_ResponseType,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";

const WorkingCapital = ({
  Is_CRNT_Data,
  setWorkingCapitalData,
}: {
  Is_CRNT_Data: Is_CRNT_ResponseType;
  setWorkingCapitalData: (
    workingCapitalData: WorkingCapitalResponseType
  ) => void;
}) => {
  const {
    mutate: postWorkingCapital,
    data: workingCapitalData,
    isPending,
    isError,
  } = usePostWorkingCapital();
  useEffect(() => {
    postWorkingCapital(Is_CRNT_Data);
  }, []);
  useEffect(() => {
    if (workingCapitalData) {
      setWorkingCapitalData(workingCapitalData.data);
    }
  }, [workingCapitalData]);
  return (
    <div>
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
