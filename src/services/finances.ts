import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AssumptionDataType,
  CalculatedAssumptionType,
  NewAssumptionDataType,
} from "../types/FinancesType";
import { get, post } from "./axios";

export const getFinances = async () => {
  const res = await get<AssumptionDataType[]>("assumption_data");
  return res;
};

export const useGetFinances = () => {
  return useQuery({ queryKey: ["getFinances"], queryFn: () => getFinances() });
};

export const getCalculatedAssumptions = async (
  df_assumption: AssumptionDataType[]
) => {
  const keyMap: Record<keyof NewAssumptionDataType, keyof AssumptionDataType> =
    {
      "COMPONENT ": "COMPONENT ",
      BASE: "BASE",
      Select: "Select",
      "2018 ": "2018",
      "2019 ": "2019",
      "2020 ": "2020",
      "2021 ": "2021",
      "2022 ": "2022",
      "2023 ": "2023",
      "2024 ": "2024",
      "2025 ": "2025",
      "2026 ": "2026",
      "2027 ": "2027",
    };
  const newOrder: (keyof NewAssumptionDataType)[] = [
    "COMPONENT ",
    "BASE",
    "Select",
    "2018 ",
    "2019 ",
    "2020 ",
    "2021 ",
    "2022 ",
    "2023 ",
    "2024 ",
    "2025 ",
    "2026 ",
    "2027 ",
  ];

  function convertKeysAndReOrder(
    df_assumptionData: AssumptionDataType,
    keyMap: Record<keyof NewAssumptionDataType, keyof AssumptionDataType>
  ): Record<keyof NewAssumptionDataType, any> {
    const newData: Record<keyof NewAssumptionDataType, any> = {} as Record<
      keyof NewAssumptionDataType,
      any
    >;
    Object.keys(df_assumptionData).forEach((key, index) => {
      const newKey = newOrder[index];
      if (newKey) {
        newData[newKey] =
          df_assumptionData[
            keyMap[
              newOrder[index] as keyof NewAssumptionDataType
            ] as keyof AssumptionDataType
          ];
      }
    });
    return newData as Record<keyof NewAssumptionDataType, any>;
  }

  const newAssumptionData = df_assumption.map((data) => {
    return convertKeysAndReOrder(data, keyMap);
  });
  console.log(newAssumptionData);
  const res = await post<CalculatedAssumptionType>(`is_crnt`, {
    df_assumption: newAssumptionData,
  });
  return res;
};

export const useGetCalculatedAssumptions = () => {
  return useMutation({
    mutationKey: ["getCalculatedAssumptions"],
    mutationFn: (df_assumption: AssumptionDataType[]) =>
      getCalculatedAssumptions(df_assumption),
  });
};
