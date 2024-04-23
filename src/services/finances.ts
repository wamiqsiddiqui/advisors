import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AssumptionResponseType,
  NewAssumptionDataType,
  DebtResponseType,
  EquityResponseType,
  Is_CRNT_ResponseType,
  WorkingCapitalResponseType,
  FixedAssetResponseType,
  BalanceSheetResponseType,
} from "../types/FinancesType";
import { get, post } from "./axios";
import { GET_ROUTES, POST_ROUTES } from "./apiRoutes";

export const getFinances = async () => {
  const res = await get<AssumptionResponseType[]>(GET_ROUTES.assumption_data);
  res.data.forEach((data) => {
    data.BASE = "Sales%";
  });

  return res;
};

export const useGetFinances = () => {
  return useQuery({
    queryKey: [GET_ROUTES.assumption_data],
    queryFn: () => getFinances(),
  });
};

export const postFixedAsset = async (
  df_assumption: AssumptionResponseType[]
) => {
  const newAssumptionData = await getCalculatedAssumptions(df_assumption);
  const res = await post<FixedAssetResponseType>(POST_ROUTES.fixedAsset, {
    df_assumption: [
      {
        COMPONENT: "REVENUE",
        BASE: "YoY%",
        Select: true,
        "2018": 0.0085774955,
        "2019": 0.1528285899,
        "2020": 0.0043055571,
        "2021": -0.2673132039,
        "2022": -0.3396820326,
        "2023": 1.0386457991,
        "2024": 0.3213454464,
        "2025": 0.299196499,
        "2026": 0.06,
        "2027": 0.06,
      },
      {
        COMPONENT: "GP MARGIN",
        BASE: "Sales%",
        Select: true,
        "2018": 0.3250056128,
        "2019": 0.3545930748,
        "2020": 0.3878352823,
        "2021": 0.4155195452,
        "2022": 0.4131066142,
        "2023": 0.35,
        "2024": 0.35,
        "2025": 0.35,
        "2026": 0.35,
        "2027": 0.35,
      },
      {
        COMPONENT: "Selling and marketing expenses",
        BASE: "YoY%",
        Select: true,
        "2018": 0.0299580696,
        "2019": 0.2874440503,
        "2020": -0.0261148336,
        "2021": 0.1486398137,
        "2022": -0.0842304629,
        "2023": 0.0701675207,
        "2024": 0.2345358799,
        "2025": 0.2498973331,
        "2026": 0.0407962094,
        "2027": 0.040458396,
      },
      {
        COMPONENT: "Repairs and maintenance",
        BASE: "YoY%",
        Select: true,
        "2018": -0.0395270585,
        "2019": 0.1767356893,
        "2020": -0.2468648858,
        "2021": 0.4494676341,
        "2022": -0.031895435,
        "2023": 0.113325655,
        "2024": 0.07,
        "2025": 0.07,
        "2026": 0.07,
        "2027": 0.07,
      },
      {
        COMPONENT: "Rent expenses",
        BASE: "YoY%",
        Select: true,
        "2018": -0.6464941581,
        "2019": 0.5728929201,
        "2020": 0.4018861982,
        "2021": -0.0270299891,
        "2022": 0.1277681408,
        "2023": 0.0413399786,
        "2024": 0.078,
        "2025": 0.078,
        "2026": 0.078,
        "2027": 0.078,
      },
      {
        COMPONENT: "Travel and communication",
        BASE: "Sales%",
        Select: true,
        "2018": 0.0075038111,
        "2019": 0.0080001562,
        "2020": 0.0060296092,
        "2021": 0.0126288484,
        "2022": 0.0226863301,
        "2023": 0.0049860419,
        "2024": 0.01,
        "2025": 0.01,
        "2026": 0.01,
        "2027": 0.01,
      },
      {
        COMPONENT: "Selling and promotion",
        BASE: "Sales%",
        Select: true,
        "2018": 0.0003696013,
        "2019": 0.0095860787,
        "2020": 0.0007272132,
        "2021": 0.0,
        "2022": 0.0,
        "2023": 0.0,
        "2024": 0.0,
        "2025": 0.0,
        "2026": 0.0,
        "2027": 0.0,
      },
      {
        COMPONENT: "Stationary",
        BASE: "YoY%",
        Select: true,
        "2018": 0.3869026549,
        "2019": -0.1773226136,
        "2020": -0.3255448693,
        "2021": -0.3519822902,
        "2022": 1.0246672582,
        "2023": -0.3421567768,
        "2024": 0.036,
        "2025": 0.036,
        "2026": 0.036,
        "2027": 0.036,
      },
      {
        COMPONENT: "Others",
        BASE: "YoY%",
        Select: true,
        "2018": -0.0133034112,
        "2019": 2.3202305988,
        "2020": -0.7186481389,
        "2021": -0.0479311014,
        "2022": 0.5921321649,
        "2023": 0.6377795395,
        "2024": 0.05,
        "2025": 0.05,
        "2026": 0.05,
        "2027": 0.05,
      },
      {
        COMPONENT: "General and administrative expenses",
        BASE: "YoY%",
        Select: true,
        "2018": 0.0,
        "2019": 0.0513429837,
        "2020": -0.0319401253,
        "2021": 0.0578248522,
        "2022": 0.1285009842,
        "2023": 0.03,
        "2024": 0.03,
        "2025": 0.03,
        "2026": 0.03,
        "2027": 0.03,
      },
      {
        COMPONENT: "CAPEX",
        BASE: "% of OB",
        Select: true,
        "2018": 0.0770398003,
        "2019": 0.1329055568,
        "2020": 0.2017036863,
        "2021": 0.1165423118,
        "2022": 0.0795441982,
        "2023": 0.12,
        "2024": 0.12,
        "2025": 0.12,
        "2026": 0.12,
        "2027": 0.12,
      },
    ],
  });
  return res;
};

export const usePostFixedAsset = () => {
  return useMutation({
    mutationKey: [POST_ROUTES.fixedAsset],
    mutationFn: (df_assumption: AssumptionResponseType[]) =>
      postFixedAsset(df_assumption),
  });
};

export const postWorkingCapital = async (is_crntData: Is_CRNT_ResponseType) => {
  const res = await post<WorkingCapitalResponseType>(
    POST_ROUTES.workingCapital,
    { is_crnt: is_crntData }
  );
  return res;
};

export const usePostWorkingCapital = () => {
  return useMutation({
    mutationKey: [POST_ROUTES.workingCapital],
    mutationFn: (is_crntData: Is_CRNT_ResponseType) =>
      postWorkingCapital(is_crntData),
  });
};

export const postBalanceSheet = async (
  workingCapitalData: WorkingCapitalResponseType
) => {
  const res = await post<BalanceSheetResponseType>(POST_ROUTES.BalanceSheet, {
    workingCapital: [
      {
        "SAR ": "Trade receivables",
        "Notes ": "Sales",
        "2019 ": 22962376,
        "2020 ": 15101882,
        "2021 ": 45471210,
        "2022 ": 33243357,
        "2023 ": 20697788.5100000016,
        "2024 ": 23796316.8471852466,
        "2025 ": 30916091.5369577855,
        "2026 ": 32771057.0291752554,
        "2027 ": 34737320.4509257749,
      },
      {
        "SAR ": "Due from related parties",
        "Notes ": "Sales",
        "2019 ": 35490307,
        "2020 ": 53628084,
        "2021 ": 53587438,
        "2022 ": 42428779,
        "2023 ": 48641429.1899999976,
        "2024 ": 41733207.0284276605,
        "2025 ": 54219636.463375397,
        "2026 ": 57472814.6511779279,
        "2027 ": 60921183.5302486122,
      },
      {
        "SAR ": "Inventories",
        "Notes ": "COGS",
        "2019 ": 7828942,
        "2020 ": 2857376,
        "2021 ": 8384088,
        "2022 ": 11025259,
        "2023 ": 11386244.0,
        "2024 ": -3851070.2633052738,
        "2025 ": 5198944.8554621199,
        "2026 ": -7018575.5548738623,
        "2027 ": 9475076.9990797155,
      },
      {
        "SAR ": "Prepayments and other receivables",
        "Notes ": "COGS",
        "2019 ": 2066640,
        "2020 ": 3617257,
        "2021 ": 3810333,
        "2022 ": 3665841,
        "2023 ": 24903230.0,
        "2024 ": -4201460.8804782676,
        "2025 ": 5671972.1886456609,
        "2026 ": -7657162.4546716427,
        "2027 ": 10337169.3138067182,
      },
      {
        "SAR ": "Trade payables",
        "Notes ": "COGS",
        "2019 ": -20821238,
        "2020 ": -26835169,
        "2021 ": -31992027,
        "2022 ": -7442767,
        "2023 ": -9307202.0,
        "2024 ": 6928675.5791377313,
        "2025 ": -9353712.0318359379,
        "2026 ": 12627511.242978517,
        "2027 ": -17047140.1780209988,
      },
      {
        "SAR ": "Accrued expenses and other liabilities",
        "Notes ": "COGS",
        "2019 ": -14278662,
        "2020 ": -20979376,
        "2021 ": -27350693,
        "2022 ": -23032528,
        "2023 ": -36455930.0,
        "2024 ": 10977957.5464774091,
        "2025 ": -14820242.6877445038,
        "2026 ": 20007327.6284550801,
        "2027 ": -27009892.2984143645,
      },
      {
        "SAR ": "Due to related parties",
        "Notes ": "Sales",
        "2019 ": -228582,
        "2020 ": -6037582,
        "2021 ": -105888084,
        "2022 ": -39585926,
        "2023 ": -44757262.0,
        "2024 ": -34127696.0116507784,
        "2025 ": -44338583.1772729531,
        "2026 ": -46998898.1679093316,
        "2027 ": -49818832.0579838976,
      },
      {
        "SAR ": "Zakat payable",
        "Notes ": null,
        "2019 ": -367704,
        "2020 ": -966901,
        "2021 ": 0,
        "2022 ": -3204831,
        "2023 ": -3070057.0,
        "2024 ": 0.0,
        "2025 ": 0.0,
        "2026 ": 0.0,
        "2027 ": 0.0,
      },
    ],
    debt: [
      {
        DEBT: "Opening balance",
        "2019": 20356448,
        "2020": 8000000,
        "2021": 1999967,
        "2022": 3503341,
        "2023": 1829681,
        "2024": 1800546,
        "2025": 1800546,
        "2026": 1800546,
        "2027": 1800546,
      },
      {
        DEBT: "Loan proceeds - net",
        "2019": 0,
        "2020": 0,
        "2021": 1503374,
        "2022": 0,
        "2023": 0,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        DEBT: "Repayments - net",
        "2019": -12356448,
        "2020": -6000033,
        "2021": 0,
        "2022": -1673660,
        "2023": -29135,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        DEBT: "Closing Balance",
        "2019": 8000000,
        "2020": 1999967,
        "2021": 3503341,
        "2022": 1829681,
        "2023": 1800546,
        "2024": 1800546,
        "2025": 1800546,
        "2026": 1800546,
        "2027": 1800546,
      },
    ],
    fixedAsset: [
      {
        FA: "Opening balance - NBV",
        "2019": 807959,
        "2020": 691950,
        "2021": 657985,
        "2022": 674682,
        "2023": 633170,
        "2024": 577677,
        "2025": 577677,
        "2026": 577677,
        "2027": 577677,
      },
      {
        FA: "Additions during the year - net",
        "2019": 62245,
        "2020": 91964,
        "2021": 132718,
        "2022": 78629,
        "2023": 50365,
        "2024": 69321.24,
        "2025": 69321.24,
        "2026": 69321.24,
        "2027": 69321.24,
      },
      {
        FA: "Depreciation charge for the year",
        "2019": -178254,
        "2020": -125929,
        "2021": -116021,
        "2022": -120141,
        "2023": -105858,
        "2024": 73480.5144,
        "2025": 73480.5144,
        "2026": 73480.5144,
        "2027": 73480.5144,
      },
      {
        FA: "Closing Balance - NBV",
        "2019": 691950,
        "2020": 657985,
        "2021": 674682,
        "2022": 633170,
        "2023": 577677,
        "2024": 720478.7544,
        "2025": 720478.7544,
        "2026": 720478.7544,
        "2027": 720478.7544,
      },
    ],
    equity: [
      {
        EQUITY: "Share capital",
        "2019": 2000000,
        "2020": 2000000,
        "2021": 2000000,
        "2022": 2000000,
        "2023": 2000000,
        "2024": 2000000,
        "2025": 2000000,
        "2026": 2000000,
        "2027": 2000000,
      },
      {
        EQUITY: "Statutory reserve",
        "2019": 1000000,
        "2020": 1000000,
        "2021": 1000000,
        "2022": 1000000,
        "2023": 1000000,
        "2024": 1000000,
        "2025": 1000000,
        "2026": 1000000,
        "2027": 1000000,
      },
      {
        EQUITY: "Retained earnings",
        "2019": 5949282,
        "2020": 23887235,
        "2021": 18416305,
        "2022": 12280879,
        "2023": 6093653,
        "2024": 6093653,
        "2025": 6093653,
        "2026": 6093653,
        "2027": 6093653,
      },
      {
        EQUITY: "Closing balance - Equity",
        "2019": 8949282,
        "2020": 26887235,
        "2021": 21416305,
        "2022": 15280879,
        "2023": 9093653,
        "2024": 9093653,
        "2025": 9093653,
        "2026": 9093653,
        "2027": 9093653,
      },
      {
        EQUITY: "Opening balance - SHARE CAPITAL",
        "2019": 2000000,
        "2020": 2000000,
        "2021": 2000000,
        "2022": 2000000,
        "2023": 2000000,
        "2024": 2000000,
        "2025": 2000000,
        "2026": 2000000,
        "2027": 2000000,
      },
      {
        EQUITY: "Capital increase/decrease",
        "2019": 0,
        "2020": 0,
        "2021": 0,
        "2022": 0,
        "2023": 0,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        EQUITY: "Closing balance - SHARE CAPITAL",
        "2019": 2000000,
        "2020": 2000000,
        "2021": 2000000,
        "2022": 2000000,
        "2023": 2000000,
        "2024": 2000000,
        "2025": 2000000,
        "2026": 2000000,
        "2027": 2000000,
      },
      {
        EQUITY: "Opening balance - STATUTORY RESERVE",
        "2019": 1000000,
        "2020": 1000000,
        "2021": 1000000,
        "2022": 1000000,
        "2023": 1000000,
        "2024": 1000000,
        "2025": 1000000,
        "2026": 1000000,
        "2027": 1000000,
      },
      {
        EQUITY: "Transfer for the year",
        "2019": 0,
        "2020": 0,
        "2021": 0,
        "2022": 0,
        "2023": 0,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        EQUITY: "Closing balance - STATUTORY RESERVE",
        "2019": 1000000,
        "2020": 1000000,
        "2021": 1000000,
        "2022": 1000000,
        "2023": 1000000,
        "2024": 1000000,
        "2025": 1000000,
        "2026": 1000000,
        "2027": 1000000,
      },
      {
        EQUITY: "Opening balance - RETAINED EARNINGS",
        "2019": 2746783,
        "2020": 5949282,
        "2021": 23887235,
        "2022": 18416305,
        "2023": 12280879,
        "2024": 6093653,
        "2025": 6093653,
        "2026": 6093653,
        "2027": 6093653,
      },
      {
        EQUITY: "Net income",
        "2019": -39435,
        "2020": 14313165,
        "2021": -5470930,
        "2022": -5964854,
        "2023": -6187222,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        EQUITY: "Dividends & OCI movement",
        "2019": 3241934,
        "2020": 3624788,
        "2021": 0,
        "2022": -170572,
        "2023": -4,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        EQUITY: "Statutory reserve transfer",
        "2019": 0,
        "2020": 0,
        "2021": 0,
        "2022": 0,
        "2023": 0,
        "2024": 0,
        "2025": 0,
        "2026": 0,
        "2027": 0,
      },
      {
        EQUITY: "Closing balance - RETAINED EARNINGS",
        "2019": 5949282,
        "2020": 23887235,
        "2021": 18416305,
        "2022": 12280879,
        "2023": 6093653,
        "2024": 6093653,
        "2025": 6093653,
        "2026": 6093653,
        "2027": 6093653,
      },
    ],
  });
  return res;
};

export const usePostBalanceSheet = () => {
  return useMutation({
    mutationKey: [POST_ROUTES.workingCapital],
    mutationFn: (workingCapitalData: WorkingCapitalResponseType) =>
      postBalanceSheet(workingCapitalData),
  });
};

export const getDebt = async () => {
  const res = await get<DebtResponseType>(GET_ROUTES.debt);
  return res;
};

export const useGetDebt = () => {
  return useQuery({
    queryKey: [GET_ROUTES.debt],
    queryFn: () => getDebt(),
  });
};

export const getEquity = async () => {
  const res = await get<EquityResponseType>(GET_ROUTES.Equity);
  return res;
};

export const useGetEquity = () => {
  return useQuery({
    queryKey: [GET_ROUTES.Equity],
    queryFn: () => getEquity(),
  });
};

export const getCalculatedAssumptions = async (
  df_assumption: AssumptionResponseType[]
) => {
  const keyMap: Record<
    keyof NewAssumptionDataType,
    keyof AssumptionResponseType
  > = {
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
    df_assumptionData: AssumptionResponseType,
    keyMap: Record<keyof NewAssumptionDataType, keyof AssumptionResponseType>
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
            ] as keyof AssumptionResponseType
          ];
      }
    });
    return newData as Record<keyof NewAssumptionDataType, any>;
  }

  const newAssumptionData = df_assumption.map((data) => {
    return convertKeysAndReOrder(data, keyMap);
  });
  return newAssumptionData;
};
const postIs_CRNT = async (df_assumption: AssumptionResponseType[]) => {
  const newAssumptionData = await getCalculatedAssumptions(df_assumption);
  const res = await post<Is_CRNT_ResponseType>(`is_crnt`, {
    df_assumption: newAssumptionData,
  });
  return res;
};
export const useGetCalculatedAssumptions = () => {
  return useMutation({
    mutationKey: ["getCalculatedAssumptions"],
    mutationFn: (df_assumption: AssumptionResponseType[]) =>
      postIs_CRNT(df_assumption),
  });
};
