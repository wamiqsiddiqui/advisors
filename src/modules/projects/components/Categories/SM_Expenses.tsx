import { useEffect, useState } from "react";
import {
  useGetSM_Assumption,
  usePostSMExpenses,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  getMappedSM_AssumptionRows,
  getMappedSM_ExpensesRows,
  removeDuplicateSM_AssumptionData,
  setSM_AssumptionObjKeyValue,
  sm_ExpensesDataColumns,
  sm_assumptionDataColumns,
} from "./FunctionsAndConstants";
import {
  SM_AssumptionResponseType,
  SM_AssumptionResponseTypeArray,
} from "../../../../types/FinancesType";

const SM_Expenses = () => {
  const { data: sm_assumptionData, isLoading, isError } = useGetSM_Assumption();

  const [selectedKeyIndex, setSelectedKeyIndex] = useState<{
    index: number;
    key: keyof SM_AssumptionResponseType;
  } | null>(null);

  const {
    mutate: postSMExpenses,
    data: sm_ExpensesData,
    isPending,
  } = usePostSMExpenses();

  const [updatedSM_AssumptionData, setUpdatedSM_Assumption] =
    useState<SM_AssumptionResponseTypeArray | null>(null);

  useEffect(() => {
    if (sm_assumptionData) {
      postSMExpenses(sm_assumptionData.data);
    }
  }, [sm_assumptionData]);

  return (
    <div>
      {isLoading ? (
        <LoadingDataGrid columns={sm_assumptionDataColumns} />
      ) : sm_assumptionData && sm_assumptionData.data.length > 0 ? (
        <DataGrid
          columns={sm_assumptionDataColumns}
          rows={getMappedSM_AssumptionRows({
            assumptionData: sm_assumptionData.data,
            onEditClick: (selectedIndex, selectedKey) => {
              setSelectedKeyIndex({ index: selectedIndex, key: selectedKey });
            },
            onChange: (
              e: React.ChangeEvent<HTMLSelectElement>,
              index: number
            ) => {
              const uniqueData = removeDuplicateSM_AssumptionData(
                sm_assumptionData.data
              );
              const updatedData = uniqueData;
              updatedData[index]["BASE"] = e.target.value;
              setUpdatedSM_Assumption(updatedData);
              postSMExpenses(updatedData);
            },
            onTextChange: (
              e: React.ChangeEvent<HTMLInputElement>,
              index: number,
              keyName: keyof SM_AssumptionResponseType
            ) => {
              const updatedAssumptionData = sm_assumptionData.data;
              const finalUpdatedAssumptionData = setSM_AssumptionObjKeyValue({
                index: index,
                key: keyName,
                obj: updatedAssumptionData,
                value: Number(e.target.value),
              });
              setUpdatedSM_Assumption(finalUpdatedAssumptionData);
            },
            onSaveClick: () => {
              setSelectedKeyIndex(null);
              if (updatedSM_AssumptionData) {
                postSMExpenses(updatedSM_AssumptionData);
              }
            },
            selectedKeyIndex: selectedKeyIndex,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      {isPending ? (
        <LoadingDataGrid columns={sm_ExpensesDataColumns} />
      ) : sm_ExpensesData && sm_ExpensesData.data.length > 0 ? (
        <DataGrid
          columns={sm_ExpensesDataColumns}
          rows={getMappedSM_ExpensesRows({
            smExpensesData: sm_ExpensesData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default SM_Expenses;
