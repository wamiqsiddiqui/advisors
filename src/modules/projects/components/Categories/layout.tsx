import { useEffect, useState } from "react";
import {
  getCalculatedAssumptions,
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
  const calculatedAssumptionsColumns: ColumnTypes[] = [
    { name: "Year", minWidth: "10%" },
    { name: "Revenue", minWidth: "10%" },
    { name: "Cost of revenues", minWidth: "10%" },
    { name: "Gross profit", minWidth: "10%" },
    { name: "Operating expenses", minWidth: "10%" },
    { name: "Selling and marketing expenses", minWidth: "10%" },
    { name: "General and administrative expenses", minWidth: "10%" },
    { name: "Profit from operations", minWidth: "10%" },
    { name: "Other income/(expense)", minWidth: "10%" },
    {
      name: "Share of income from equity accounted investment",
      minWidth: "10%",
    },
    { name: "Fair value loss on investments", minWidth: "10%" },
    { name: "Dividends", minWidth: "10%" },
    { name: "Other expenses", minWidth: "10%" },
    { name: "Other income", minWidth: "10%" },
    { name: "Finance cost", minWidth: "10%" },
    { name: "Profit / loss before zakat", minWidth: "10%" },
    { name: "Zakat", minWidth: "10%" },
    { name: "Net loss for the year", minWidth: "10%" },
    {
      name: "Re-measurements of employee termination benefits",
      minWidth: "10%",
    },
    { name: "Other comprehensive income", minWidth: "10%" },
    { name: "Total comprehensive loss for the year", minWidth: "10%" },
  ];
  const { data: assumptionData, isLoading } = useGetFinances();
  const [selectedAssumption, setSelectedAssumption] = useState<
    AssumptionDataType | undefined
  >();
  const {
    mutate: mutateAssumptions,
    isPending: isCalculatedAssumptionsLoading,
    data: calculatedAssumptionsData,
  } = useGetCalculatedAssumptions();
  const [checked, setChecked] = useState<boolean[]>([]);
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
                  onChange: async () => {
                    const previousVal = checked[index];
                    let newChecked = Array(
                      assumptionData?.data.length ?? 0
                    ).fill(false);
                    newChecked[index] = !previousVal;
                    console.log("c = ", newChecked);
                    setChecked(newChecked);
                    // setSelectedAssumption(data);
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
          <>No Record Found!</>
        )}
        {isCalculatedAssumptionsLoading ? (
          <LoadingDataGrid columns={columns} />
        ) : calculatedAssumptionsData &&
          calculatedAssumptionsData.data.length > 0 ? (
          <DataGrid
            columns={calculatedAssumptionsColumns}
            rows={calculatedAssumptionsData.data.map((data) => {
              return {
                year: data.year,
                revenue: data.revenue,
                "cost of revenues": data["cost of revenues"],
                "gross profit": data["gross profit"],
                "operating expenses": data["operating expenses"],
                "selling and marketing expenses":
                  data["selling and marketing expenses"],
                "general and administrative expenses":
                  data["general and administrative expenses"],
                "profit from operations": data["profit from operations"],
                "other income/(expense)": data["other income/(expense)"],
                "share of income from equity accounted investment":
                  data["share of income from equity accounted investment"],
                "fair value loss on investments":
                  data["fair value loss on investments"],
                dividends: data.dividends,
                "other expenses": data["other expenses"],
                "other income": data["other income"],
                "finance cost": data["finance cost"],
                "profit / loss before zakat":
                  data["profit / loss before zakat"],
                zakat: data.zakat,
                "net loss for the year": data["net loss for the year"],
                "re-measurements of employee termination benefits":
                  data["re-measurements of employee termination benefits"],
                "other comprehensive income":
                  data["other comprehensive income"],
                "total comprehensive loss for the year":
                  data["total comprehensive loss for the year"],
              };
            })}
          />
        ) : (
          <>No Record Found!</>
        )}
      </div>
    </div>
  );
};

export default CategoriesLayout;
