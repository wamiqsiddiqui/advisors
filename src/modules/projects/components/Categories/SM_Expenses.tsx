import { useEffect, useState } from "react";
import {
  useGetSM_Assumption,
  usePostSMAnnualGrowth,
  usePostSMExpenses,
  usePostSMKeyIndicator,
  usePostSMPercentageOfRevenue,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  getMappedSM_AnnualGrowthRows,
  getMappedSM_AssumptionRows,
  getMappedSM_ExpensesRows,
  getMappedSM_IndicatorRows,
  getMappedSM_PercentageOfRevenueRows,
  removeDuplicateSM_AssumptionData,
  setSM_AssumptionObjKeyValue,
  sm_AnnualGrowthDataColumns,
  sm_ExpensesDataColumns,
  sm_IndicatorsDataColumns,
  sm_assumptionDataColumns,
} from "./FunctionsAndConstants";
import {
  SM_AssumptionResponseType,
  SM_AssumptionResponseTypeArray,
} from "../../../../types/FinancesType";
import CustomButton from "../../../core/components/CustomButton";
import { ToggleValue } from "../../../../types/generalTypes";

const SM_Expenses = () => {
  const { data: sm_assumptionData, isLoading, isError } = useGetSM_Assumption();
  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");
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

  const {
    mutate: postSM_KeyIndicator,
    data: SM_KeyIndicatorData,
    isPending: isSM_KeyIndicatorPending,
  } = usePostSMKeyIndicator();
  useEffect(() => {
    if (sm_ExpensesData) {
      postSM_KeyIndicator({
        df_is_crnt: [
          {
            components: "revenue",
            "2017": 46522640.0,
            "2018": 64428666.0,
            "2019": 71611609.0,
            "2020": 71147206.0,
            "2021": 87466945.0,
            "2022": 49030649.0,
            "2023": 40067175.0,
            "2024": 52942579.2363619208,
            "2025": 68782813.5919114947,
            "2026": 72909782.4074261934,
            "2027": 77284369.3518717736,
          },
          {
            components: "cost of revenues",
            "2017": -31775266.0,
            "2018": -51986849.0,
            "2019": -51856556.0,
            "2020": -65324056.0,
            "2021": -70661391.0,
            "2022": -37610528.0,
            "2023": -30069414.0,
            "2024": 19545119.1000000015,
            "2025": -26385910.7850000039,
            "2026": 35620979.5597500056,
            "2027": -48088322.4056625143,
          },
          {
            components: "gross profit",
            "2017": 14747374.0,
            "2018": 12441817.0,
            "2019": 19755053.0,
            "2020": 5823150.0,
            "2021": 16805554.0,
            "2022": 11420121.0,
            "2023": 9997761.0,
            "2024": 72487698.3363619149,
            "2025": 42396902.8069114909,
            "2026": 108530761.967176199,
            "2027": 29196046.9462092593,
          },
          {
            components: "operating expenses",
            "2017": 0,
            "2018": 0,
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
            components: "selling and marketing expenses",
            "2017": -9014606.0,
            "2018": -8606275.0,
            "2019": -9676407.0,
            "2020": -8974326.0,
            "2021": -10575060.0,
            "2022": -11343758.0,
            "2023": -10642887.0,
            "2024": -2496139.8672212712,
            "2025": -623779.6958631838,
            "2026": -25448.8470919028,
            "2027": -1030.6195333877,
          },
          {
            components: "general and administrative expenses",
            "2017": -3132505.0,
            "2018": -3222271.0,
            "2019": -3539221.0,
            "2020": -7000511.0,
            "2021": -2774984.0,
            "2022": -1926404.0,
            "2023": -4709576.0,
            "2024": -4850863.2800000003,
            "2025": -4996389.1784000006,
            "2026": -5146280.8537520003,
            "2027": -5300669.2793645607,
          },
          {
            components: "profit from operations",
            "2017": 2600263.0,
            "2018": 613271.0,
            "2019": 6539425.0,
            "2020": -10151687.0,
            "2021": 3455510.0,
            "2022": -1850041.0,
            "2023": -5354702.0,
            "2024": 65140695.1891406476,
            "2025": 36776733.9326483011,
            "2026": 103359032.2663322985,
            "2027": 23894347.0473113135,
          },
          {
            components: "other income/(expense)",
            "2017": 0,
            "2018": 0,
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
            components: "share of income from equity accounted investment",
            "2017": 991521.0,
            "2018": 1519942.0,
            "2019": 2055395.0,
            "2020": 4163496.0,
            "2021": -2001652.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "fair value loss on investments",
            "2017": -31141249.0,
            "2018": -9660000.0,
            "2019": -5700000.0,
            "2020": 24660000.0,
            "2021": -3300000.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "dividends",
            "2017": 2250000.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other expenses",
            "2017": -892896.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other income",
            "2017": 2227940.0,
            "2018": 123657.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "finance cost",
            "2017": -8340.0,
            "2018": 0.0,
            "2019": -2566551.0,
            "2020": -3241934.0,
            "2021": -3624788.0,
            "2022": -909982.0,
            "2023": -832520.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "profit / loss before zakat",
            "2017": -23972761.0,
            "2018": -7403130.0,
            "2019": 328269.0,
            "2020": 15429875.0,
            "2021": -5470930.0,
            "2022": -2760023.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "zakat",
            "2017": 0.0,
            "2018": -132721.0,
            "2019": -367704.0,
            "2020": -1116710.0,
            "2021": 0.0,
            "2022": -3204831.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "net loss for the year",
            "2017": -23972761.0,
            "2018": -7535851.0,
            "2019": -39435.0,
            "2020": 14313165.0,
            "2021": -5470930.0,
            "2022": -5964854.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "re-measurements of employee termination benefits",
            "2017": 0.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": -170572.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other comprehensive income",
            "2017": 0.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "total comprehensive loss for the year",
            "2017": -23972761.0,
            "2018": -7535851.0,
            "2019": -39435.0,
            "2020": 14313165.0,
            "2021": -5470930.0,
            "2022": -6135426.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
        ],
        sm_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 8059299.0,
            "2020": 7334898.0,
            "2021": 8601031.0,
            "2022": 9138999.0,
            "2023": 8507273.0,
            "2024": 8762491.1899999995,
            "2025": 9025365.9256999996,
            "2026": 9296126.9034710005,
            "2027": 9575010.7105751298,
            "2028": 9862261.0318923835,
          },
          {
            "G&A": "repairs and maintenance",
            "2019": 525464.0,
            "2020": 437893.0,
            "2021": 670815.0,
            "2022": 521102.0,
            "2023": 599115.0,
            "2024": 629070.75,
            "2025": 660524.2875,
            "2026": 693550.501875,
            "2027": 728228.0269687499,
            "2028": 764639.4283171875,
          },
          {
            "G&A": "rent",
            "2019": 399975.0,
            "2020": 299549.0,
            "2021": 405214.0,
            "2022": 601836.0,
            "2023": 698340.0,
            "2024": 733257.0,
            "2025": 769919.85,
            "2026": 808415.8425,
            "2027": 848836.6346250001,
            "2028": 891278.4663562501,
          },
          {
            "G&A": "travel and communication",
            "2019": 377418.0,
            "2020": 370052.0,
            "2021": 500770.0,
            "2022": 439403.0,
            "2023": 538330.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "legal cost",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "selling and promotion",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "stationary",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "insurance",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 314251.0,
            "2020": 531934.0,
            "2021": 397230.0,
            "2022": 642418.0,
            "2023": 299829.0,
            "2024": 314820.45,
            "2025": 330561.4725,
            "2026": 347089.5461250001,
            "2027": 364444.0234312501,
            "2028": 382666.2246028126,
          },
          {
            "G&A": "total",
            "2019": 9676407.0,
            "2020": 8974326.0,
            "2021": 10575060.0,
            "2022": 11343758.0,
            "2023": 10642887.0,
            "2024": 10439639.3899999987,
            "2025": 10786371.535699999,
            "2026": 11145182.7939710002,
            "2027": 11516519.3956001308,
            "2028": 11900845.1511686333,
          },
        ],
      });
    }
  }, [sm_ExpensesData]);
  const {
    mutate: postSM_PercentageOfRevenue,
    data: SM_PercentageOfRevenueData,
    isPending: isSM_PercentageOfRevenuePending,
  } = usePostSMPercentageOfRevenue();
  useEffect(() => {
    if (sm_ExpensesData) {
      postSM_PercentageOfRevenue({
        df_is_crnt: [
          {
            components: "revenue",
            "2017": 46522640.0,
            "2018": 64428666.0,
            "2019": 71611609.0,
            "2020": 71147206.0,
            "2021": 87466945.0,
            "2022": 49030649.0,
            "2023": 40067175.0,
            "2024": 52942579.2363619208,
            "2025": 68782813.5919114947,
            "2026": 72909782.4074261934,
            "2027": 77284369.3518717736,
          },
          {
            components: "cost of revenues",
            "2017": -31775266.0,
            "2018": -51986849.0,
            "2019": -51856556.0,
            "2020": -65324056.0,
            "2021": -70661391.0,
            "2022": -37610528.0,
            "2023": -30069414.0,
            "2024": 19545119.1000000015,
            "2025": -26385910.7850000039,
            "2026": 35620979.5597500056,
            "2027": -48088322.4056625143,
          },
          {
            components: "gross profit",
            "2017": 14747374.0,
            "2018": 12441817.0,
            "2019": 19755053.0,
            "2020": 5823150.0,
            "2021": 16805554.0,
            "2022": 11420121.0,
            "2023": 9997761.0,
            "2024": 72487698.3363619149,
            "2025": 42396902.8069114909,
            "2026": 108530761.967176199,
            "2027": 29196046.9462092593,
          },
          {
            components: "operating expenses",
            "2017": 0,
            "2018": 0,
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
            components: "selling and marketing expenses",
            "2017": -9014606.0,
            "2018": -8606275.0,
            "2019": -9676407.0,
            "2020": -8974326.0,
            "2021": -10575060.0,
            "2022": -11343758.0,
            "2023": -10642887.0,
            "2024": -2496139.8672212712,
            "2025": -623779.6958631838,
            "2026": -25448.8470919028,
            "2027": -1030.6195333877,
          },
          {
            components: "general and administrative expenses",
            "2017": -3132505.0,
            "2018": -3222271.0,
            "2019": -3539221.0,
            "2020": -7000511.0,
            "2021": -2774984.0,
            "2022": -1926404.0,
            "2023": -4709576.0,
            "2024": -4850863.2800000003,
            "2025": -4996389.1784000006,
            "2026": -5146280.8537520003,
            "2027": -5300669.2793645607,
          },
          {
            components: "profit from operations",
            "2017": 2600263.0,
            "2018": 613271.0,
            "2019": 6539425.0,
            "2020": -10151687.0,
            "2021": 3455510.0,
            "2022": -1850041.0,
            "2023": -5354702.0,
            "2024": 65140695.1891406476,
            "2025": 36776733.9326483011,
            "2026": 103359032.2663322985,
            "2027": 23894347.0473113135,
          },
          {
            components: "other income/(expense)",
            "2017": 0,
            "2018": 0,
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
            components: "share of income from equity accounted investment",
            "2017": 991521.0,
            "2018": 1519942.0,
            "2019": 2055395.0,
            "2020": 4163496.0,
            "2021": -2001652.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "fair value loss on investments",
            "2017": -31141249.0,
            "2018": -9660000.0,
            "2019": -5700000.0,
            "2020": 24660000.0,
            "2021": -3300000.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "dividends",
            "2017": 2250000.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other expenses",
            "2017": -892896.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other income",
            "2017": 2227940.0,
            "2018": 123657.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "finance cost",
            "2017": -8340.0,
            "2018": 0.0,
            "2019": -2566551.0,
            "2020": -3241934.0,
            "2021": -3624788.0,
            "2022": -909982.0,
            "2023": -832520.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "profit / loss before zakat",
            "2017": -23972761.0,
            "2018": -7403130.0,
            "2019": 328269.0,
            "2020": 15429875.0,
            "2021": -5470930.0,
            "2022": -2760023.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "zakat",
            "2017": 0.0,
            "2018": -132721.0,
            "2019": -367704.0,
            "2020": -1116710.0,
            "2021": 0.0,
            "2022": -3204831.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "net loss for the year",
            "2017": -23972761.0,
            "2018": -7535851.0,
            "2019": -39435.0,
            "2020": 14313165.0,
            "2021": -5470930.0,
            "2022": -5964854.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "re-measurements of employee termination benefits",
            "2017": 0.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": -170572.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "other comprehensive income",
            "2017": 0.0,
            "2018": 0.0,
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
          {
            components: "total comprehensive loss for the year",
            "2017": -23972761.0,
            "2018": -7535851.0,
            "2019": -39435.0,
            "2020": 14313165.0,
            "2021": -5470930.0,
            "2022": -6135426.0,
            "2023": -6187222.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
          },
        ],
        sm_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 8059299.0,
            "2020": 7334898.0,
            "2021": 8601031.0,
            "2022": 9138999.0,
            "2023": 8507273.0,
            "2024": 8762491.1899999995,
            "2025": 9025365.9256999996,
            "2026": 9296126.9034710005,
            "2027": 9575010.7105751298,
            "2028": 9862261.0318923835,
          },
          {
            "G&A": "repairs and maintenance",
            "2019": 525464.0,
            "2020": 437893.0,
            "2021": 670815.0,
            "2022": 521102.0,
            "2023": 599115.0,
            "2024": 629070.75,
            "2025": 660524.2875,
            "2026": 693550.501875,
            "2027": 728228.0269687499,
            "2028": 764639.4283171875,
          },
          {
            "G&A": "rent",
            "2019": 399975.0,
            "2020": 299549.0,
            "2021": 405214.0,
            "2022": 601836.0,
            "2023": 698340.0,
            "2024": 733257.0,
            "2025": 769919.85,
            "2026": 808415.8425,
            "2027": 848836.6346250001,
            "2028": 891278.4663562501,
          },
          {
            "G&A": "travel and communication",
            "2019": 377418.0,
            "2020": 370052.0,
            "2021": 500770.0,
            "2022": 439403.0,
            "2023": 538330.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "legal cost",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "selling and promotion",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "stationary",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "insurance",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 314251.0,
            "2020": 531934.0,
            "2021": 397230.0,
            "2022": 642418.0,
            "2023": 299829.0,
            "2024": 314820.45,
            "2025": 330561.4725,
            "2026": 347089.5461250001,
            "2027": 364444.0234312501,
            "2028": 382666.2246028126,
          },
          {
            "G&A": "total",
            "2019": 9676407.0,
            "2020": 8974326.0,
            "2021": 10575060.0,
            "2022": 11343758.0,
            "2023": 10642887.0,
            "2024": 10439639.3899999987,
            "2025": 10786371.535699999,
            "2026": 11145182.7939710002,
            "2027": 11516519.3956001308,
            "2028": 11900845.1511686333,
          },
        ],
      });
    }
  }, [sm_ExpensesData]);

  const {
    mutate: postSM_AnnualGrowth,
    data: SM_AnnualGrowthData,
    isPending: isSM_AnnualGrowthPending,
  } = usePostSMAnnualGrowth();
  useEffect(() => {
    if (sm_ExpensesData) {
      postSM_AnnualGrowth({
        sm_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 8059299.0,
            "2020": 7334898.0,
            "2021": 8601031.0,
            "2022": 9138999.0,
            "2023": 8507273.0,
            "2024": 8762491.1899999995,
            "2025": 9025365.9256999996,
            "2026": 9296126.9034710005,
            "2027": 9575010.7105751298,
            "2028": 9862261.0318923835,
          },
          {
            "G&A": "repairs and maintenance",
            "2019": 525464.0,
            "2020": 437893.0,
            "2021": 670815.0,
            "2022": 521102.0,
            "2023": 599115.0,
            "2024": 629070.75,
            "2025": 660524.2875,
            "2026": 693550.501875,
            "2027": 728228.0269687499,
            "2028": 764639.4283171875,
          },
          {
            "G&A": "rent",
            "2019": 399975.0,
            "2020": 299549.0,
            "2021": 405214.0,
            "2022": 601836.0,
            "2023": 698340.0,
            "2024": 733257.0,
            "2025": 769919.85,
            "2026": 808415.8425,
            "2027": 848836.6346250001,
            "2028": 891278.4663562501,
          },
          {
            "G&A": "travel and communication",
            "2019": 377418.0,
            "2020": 370052.0,
            "2021": 500770.0,
            "2022": 439403.0,
            "2023": 538330.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "legal cost",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "selling and promotion",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "stationary",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "insurance",
            "2019": 0.0,
            "2020": 0.0,
            "2021": 0.0,
            "2022": 0.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 314251.0,
            "2020": 531934.0,
            "2021": 397230.0,
            "2022": 642418.0,
            "2023": 299829.0,
            "2024": 314820.45,
            "2025": 330561.4725,
            "2026": 347089.5461250001,
            "2027": 364444.0234312501,
            "2028": 382666.2246028126,
          },
          {
            "G&A": "total",
            "2019": 9676407.0,
            "2020": 8974326.0,
            "2021": 10575060.0,
            "2022": 11343758.0,
            "2023": 10642887.0,
            "2024": 10439639.3899999987,
            "2025": 10786371.535699999,
            "2026": 11145182.7939710002,
            "2027": 11516519.3956001308,
            "2028": 11900845.1511686333,
          },
        ],
      });
    }
  }, [sm_ExpensesData]);
  return (
    <div>
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">
          Selling & Marketing Exepenses Data
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
        <LoadingDataGrid columns={sm_ExpensesDataColumns} />
      ) : sm_ExpensesData && sm_ExpensesData.data.length > 0 ? (
        <DataGrid
          columns={sm_ExpensesDataColumns}
          rows={getMappedSM_ExpensesRows({
            smExpensesData: sm_ExpensesData.data,
            toggleValue: expensesToggle,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      <p className="text-3xl font-normal text-start mb-4">
        Assumption Data for Selling & Marketing Expenses
      </p>
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
              const updatedAssumptionData = removeDuplicateSM_AssumptionData(
                sm_assumptionData.data
              );
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
      <p className="text-3xl font-normal text-start mb-4">Key Indicators</p>
      {isSM_KeyIndicatorPending ? (
        <LoadingDataGrid columns={sm_IndicatorsDataColumns} />
      ) : SM_KeyIndicatorData && SM_KeyIndicatorData.data.length > 0 ? (
        <DataGrid
          columns={sm_IndicatorsDataColumns}
          rows={getMappedSM_IndicatorRows({
            smIndicatorsData: SM_KeyIndicatorData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">
          Percentage Of Revenue Data
        </p>
      </div>
      {isSM_PercentageOfRevenuePending ? (
        <LoadingDataGrid columns={sm_AnnualGrowthDataColumns} />
      ) : SM_PercentageOfRevenueData &&
        SM_PercentageOfRevenueData.data.length > 0 ? (
        <DataGrid
          columns={sm_AnnualGrowthDataColumns}
          rows={getMappedSM_PercentageOfRevenueRows({
            smPercentageOfRevenueData: SM_PercentageOfRevenueData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}{" "}
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">
          Annual Growth Data
        </p>
      </div>
      {isSM_AnnualGrowthPending ? (
        <LoadingDataGrid columns={sm_AnnualGrowthDataColumns} />
      ) : SM_AnnualGrowthData && SM_AnnualGrowthData.data.length > 0 ? (
        <DataGrid
          columns={sm_AnnualGrowthDataColumns}
          rows={getMappedSM_AnnualGrowthRows({
            smAnnualGrowthData: SM_AnnualGrowthData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default SM_Expenses;
