import { useEffect, useState } from "react";
import {
  useGetGA_Assumption,
  usePostGAExpenses,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  ga_ExpensesDataColumns,
  ga_assumptionDataColumns,
  getMappedGA_AssumptionRows,
  getMappedGA_ExpensesRows,
  removeDuplicateGA_AssumptionData,
  setGA_AssumptionObjKeyValue,
} from "./FunctionsAndConstants";
import {
  GA_AssumptionResponseType,
  GA_AssumptionResponseTypeArray,
} from "../../../../types/FinancesType";

const GA_Expenses = () => {
  const { data: ga_assumptionData, isLoading, isError } = useGetGA_Assumption();

  const [selectedKeyIndex, setSelectedKeyIndex] = useState<{
    index: number;
    key: keyof GA_AssumptionResponseType;
  } | null>(null);

  const {
    mutate: postGAExpenses,
    data: ga_ExpensesData,
    isPending,
  } = usePostGAExpenses();

  const [updatedGA_AssumptionData, setUpdatedGA_Assumption] =
    useState<GA_AssumptionResponseTypeArray | null>(null);

  useEffect(() => {
    if (ga_assumptionData) {
      postGAExpenses(ga_assumptionData.data);
    }
  }, [ga_assumptionData]);

  return (
    <div>
      {isLoading ? (
        <LoadingDataGrid columns={ga_assumptionDataColumns} />
      ) : ga_assumptionData && ga_assumptionData.data.length > 0 ? (
        <DataGrid
          columns={ga_assumptionDataColumns}
          rows={getMappedGA_AssumptionRows({
            assumptionData: ga_assumptionData.data,
            onEditClick: (selectedIndex, selectedKey) => {
              setSelectedKeyIndex({ index: selectedIndex, key: selectedKey });
            },
            onChange: (
              e: React.ChangeEvent<HTMLSelectElement>,
              index: number
            ) => {
              const uniqueData = removeDuplicateGA_AssumptionData(
                ga_assumptionData.data
              );
              const updatedData = uniqueData;
              updatedData[index]["BASE"] = e.target.value;
              setUpdatedGA_Assumption(updatedData);
              postGAExpenses(updatedData);
            },
            onTextChange: (
              e: React.ChangeEvent<HTMLInputElement>,
              index: number,
              keyName: keyof GA_AssumptionResponseType
            ) => {
              const updatedAssumptionData = ga_assumptionData.data;
              const finalUpdatedAssumptionData = setGA_AssumptionObjKeyValue({
                index: index,
                key: keyName,
                obj: updatedAssumptionData,
                value: Number(e.target.value),
              });
              setUpdatedGA_Assumption(finalUpdatedAssumptionData);
            },
            onSaveClick: () => {
              setSelectedKeyIndex(null);
              if (updatedGA_AssumptionData) {
                postGAExpenses(updatedGA_AssumptionData);
              }
            },
            selectedKeyIndex: selectedKeyIndex,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      {isPending ? (
        <LoadingDataGrid columns={ga_ExpensesDataColumns} />
      ) : ga_ExpensesData && ga_ExpensesData.data.length > 0 ? (
        <DataGrid
          columns={ga_ExpensesDataColumns}
          rows={getMappedGA_ExpensesRows({
            gaExpensesData: ga_ExpensesData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default GA_Expenses;
