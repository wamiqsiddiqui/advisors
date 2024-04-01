import { useQuery } from "@tanstack/react-query";
import { AssumptionDataType } from "../types/FinancesType";
import { get } from "./axios";

export const getFinances = async () => {
  const res = await get<AssumptionDataType[]>("assumption_data");
  return res;
};

export const useGetFinances = () => {
  return useQuery({ queryKey: ["getFinances"], queryFn: () => getFinances() });
};

export const getCalculatedAssumptions = async (df_assumption: any) => {
  console.log("caling getCalculatedAssumptions");
  const res = await get(`is_crnt/${df_assumption}`);
  return res;
};

export const useGetCalculatedAssumptions = (df_assumption: any) => {
  console.log("df_assumption = ", df_assumption);
  return useQuery({
    queryKey: ["getCalculatedAssumptions", df_assumption],
    queryFn: () => getCalculatedAssumptions(df_assumption),
    enabled: Boolean(df_assumption),
  });
};
