import { useEffect, useState } from "react";
import {
  useGetCalculatedAssumptions,
  useGetFinances,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import { ColumnTypes } from "../../../../types/generalTypes";
import { AssumptionDataType } from "../../../../types/FinancesType";

const CategoriesLayout = () => {
  const columns: ColumnTypes[] = [
    { name: "COMPONENT", minWidth: "10%" },
    { name: "Select", minWidth: "10%" },
    { name: "2018", minWidth: "10%" },
    { name: "2019", minWidth: "30%" },
    { name: "2020", minWidth: "10%" },
    { name: "2021", minWidth: "10%" },
    { name: "2022", minWidth: "10%" },
    { name: "2023", minWidth: "10%" },
    { name: "2024", minWidth: "10%" },
    { name: "2025", minWidth: "10%" },
    { name: "2026", minWidth: "10%" },
    { name: "2027", minWidth: "10%" },
    { name: "Base", minWidth: "10%" },
  ];
  const { data: assumptionData, isLoading } = useGetFinances();
  const [selectedAssumption, setSelectedAssumption] = useState<
    AssumptionDataType | undefined
  >();
  const {
    data: calculatedAssumptionsData,
    isLoading: isCalculatedAssumptionsLoading,
  } = useGetCalculatedAssumptions(selectedAssumption);
  const [checked, setChecked] = useState<boolean[]>([]);
  console.log("calculatedAssumptionsData = ", calculatedAssumptionsData?.data);
  useEffect(() => {
    if (
      assumptionData?.data &&
      (checked.length === 0 || checked.length !== assumptionData.data.length)
    )
      setChecked(Array(assumptionData?.data.length ?? 0).fill(false));
  }, [assumptionData?.data]);
  return (
    <div className="flex flex-col p-6">
      <p className="text-5xl font-thin text-start mb-4">Categories</p>
      <div className=" rounded-xl p-1 bg-primary-bgBlack">
        {isLoading ? (
          <LoadingDataGrid columns={columns} />
        ) : assumptionData && assumptionData.data.length > 0 ? (
          <DataGrid
            columns={columns}
            rows={assumptionData.data.map((data, index) => {
              return {
                key1: data["COMPONENT "],
                select: {
                  isChecked: checked[index] ?? false,
                  isLoading:
                    selectedAssumption &&
                    selectedAssumption["COMPONENT "] === data["COMPONENT "]
                      ? isCalculatedAssumptionsLoading
                      : false,
                  onChange: () => {
                    const previousVal = checked[index];
                    let newChecked = Array(
                      assumptionData?.data.length ?? 0
                    ).fill(false);
                    newChecked[index] = !previousVal;
                    console.log("c = ", newChecked);
                    setChecked(newChecked);
                    setSelectedAssumption(data);
                  },
                },
                key3: data[2018],
                key4: data[2019],
                key5: data[2020],
                key6: data[2021],
                key7: data[2022],
                key8: data[2023],
                key9: data[2024],
                key10: data[2025],
                key11: data[2026],
                key12: data[2027],
                key13: data.BASE,
              };
            })}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CategoriesLayout;
