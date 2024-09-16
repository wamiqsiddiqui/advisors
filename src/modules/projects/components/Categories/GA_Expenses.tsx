import { useEffect, useState } from "react";
import {
  useGetGA_Assumption,
  usePostGAAnnualGrowth,
  usePostGAExpenses,
  usePostGAKeyIndicator,
  usePostGAPercentageOfRevenue,
} from "../../../../services/finances";
import DataGrid from "../../../core/components/DataGrid";
import LoadingDataGrid from "../../../core/components/Loaders/LoadingDataGrid";
import {
  ga_AnnualGrowthDataColumns,
  ga_ExpensesDataColumns,
  ga_IndicatorsDataColumns,
  ga_PercentageOfRevenueDataColumns,
  ga_assumptionDataColumns,
  getMappedGA_AnnualGrowthRows,
  getMappedGA_AssumptionRows,
  getMappedGA_ExpensesRows,
  getMappedGA_IndicatorsRows,
  getMappedGA_PercentageOfRevenueRows,
  removeDuplicateGA_AssumptionData,
  setGA_AssumptionObjKeyValue,
} from "./FunctionsAndConstants";
import {
  GA_AssumptionResponseType,
  GA_AssumptionResponseTypeArray,
} from "../../../../types/FinancesType";
import CustomButton from "../../../core/components/CustomButton";
import { ToggleValue } from "../../../../types/generalTypes";

const GA_Expenses = () => {
  const { data: ga_assumptionData, isLoading, isError } = useGetGA_Assumption();

  const [expensesToggle, setToggle] = useState<ToggleValue>("Absolute");
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

  const {
    mutate: postGA_KeyIndicator,
    data: GA_KeyIndicatorData,
    isPending: isGA_KeyIndicatorPending,
  } = usePostGAKeyIndicator();
  useEffect(() => {
    if (ga_ExpensesData) {
      postGA_KeyIndicator({
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
        ga_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 801999.0,
            "2020": 685091.0,
            "2021": 824313.0,
            "2022": 853886.0,
            "2023": 847178.0,
            "2024": 872593.34,
            "2025": 898771.1402,
            "2026": 925734.274406,
            "2027": 953506.3026381801,
            "2028": 982111.4917173255,
          },
          {
            "G&A": "management recharge",
            "2019": 2301900.0,
            "2020": 2315163.0,
            "2021": 2183022.0,
            "2022": 2539461.0,
            "2023": 3265397.0,
            "2024": 2612317.6000000001,
            "2025": 2690687.128,
            "2026": 2771407.7418400003,
            "2027": 2854549.9740952002,
            "2028": 2940186.4733180562,
          },
          {
            "G&A": "professional fees",
            "2019": 210555.0,
            "2020": 181018.0,
            "2021": 232854.0,
            "2022": 283412.0,
            "2023": 415772.0,
            "2024": 428245.16,
            "2025": 441092.5148000001,
            "2026": 454325.2902440001,
            "2027": 467955.0489513201,
            "2028": 481993.7004198597,
          },
          {
            "G&A": "impairment on trade receivables",
            "2019": 0.0,
            "2020": 3658377.0,
            "2021": -881479.0,
            "2022": -1974398.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 46513.0,
            "2020": 34933.0,
            "2021": 300253.0,
            "2022": 103902.0,
            "2023": 75371.0,
            "2024": 77632.13,
            "2025": 79961.0939,
            "2026": 82359.926717,
            "2027": 84830.72451851,
            "2028": 87375.6462540653,
          },
          {
            "G&A": "total",
            "2019": 3360967.0,
            "2020": 6874582.0,
            "2021": 2658963.0,
            "2022": 1806263.0,
            "2023": 4603718.0,
            "2024": 3990788.23,
            "2025": 4110511.8769,
            "2026": 4233827.2332070004,
            "2027": 4360842.0502032097,
            "2028": 4491667.3117093071,
          },
        ],
      });
    }
  }, [ga_ExpensesData]);
  const {
    mutate: postGA_PercentageOfRevenue,
    data: GA_PercentageOfRevenueData,
    isPending: isGA_PercentageOfRevenuePending,
  } = usePostGAPercentageOfRevenue();
  useEffect(() => {
    if (ga_ExpensesData) {
      postGA_PercentageOfRevenue({
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
        ga_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 801999.0,
            "2020": 685091.0,
            "2021": 824313.0,
            "2022": 853886.0,
            "2023": 847178.0,
            "2024": 872593.34,
            "2025": 898771.1402,
            "2026": 925734.274406,
            "2027": 953506.3026381801,
            "2028": 982111.4917173255,
          },
          {
            "G&A": "management recharge",
            "2019": 2301900.0,
            "2020": 2315163.0,
            "2021": 2183022.0,
            "2022": 2539461.0,
            "2023": 3265397.0,
            "2024": 2612317.6000000001,
            "2025": 2690687.128,
            "2026": 2771407.7418400003,
            "2027": 2854549.9740952002,
            "2028": 2940186.4733180562,
          },
          {
            "G&A": "professional fees",
            "2019": 210555.0,
            "2020": 181018.0,
            "2021": 232854.0,
            "2022": 283412.0,
            "2023": 415772.0,
            "2024": 428245.16,
            "2025": 441092.5148000001,
            "2026": 454325.2902440001,
            "2027": 467955.0489513201,
            "2028": 481993.7004198597,
          },
          {
            "G&A": "impairment on trade receivables",
            "2019": 0.0,
            "2020": 3658377.0,
            "2021": -881479.0,
            "2022": -1974398.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 46513.0,
            "2020": 34933.0,
            "2021": 300253.0,
            "2022": 103902.0,
            "2023": 75371.0,
            "2024": 77632.13,
            "2025": 79961.0939,
            "2026": 82359.926717,
            "2027": 84830.72451851,
            "2028": 87375.6462540653,
          },
          {
            "G&A": "total",
            "2019": 3360967.0,
            "2020": 6874582.0,
            "2021": 2658963.0,
            "2022": 1806263.0,
            "2023": 4603718.0,
            "2024": 3990788.23,
            "2025": 4110511.8769,
            "2026": 4233827.2332070004,
            "2027": 4360842.0502032097,
            "2028": 4491667.3117093071,
          },
        ],
      });
    }
  }, [ga_ExpensesData]);

  const {
    mutate: postGA_AnnualGrowth,
    data: GA_AnnualGrowthData,
    isPending: isGA_AnnualGrowthPending,
  } = usePostGAAnnualGrowth();
  useEffect(() => {
    if (ga_ExpensesData) {
      postGA_AnnualGrowth({
        ga_expenses: [
          {
            "G&A": "salaries, wages and benefits",
            "2019": 801999.0,
            "2020": 685091.0,
            "2021": 824313.0,
            "2022": 853886.0,
            "2023": 847178.0,
            "2024": 872593.34,
            "2025": 898771.1402,
            "2026": 925734.274406,
            "2027": 953506.3026381801,
            "2028": 982111.4917173255,
          },
          {
            "G&A": "management recharge",
            "2019": 2301900.0,
            "2020": 2315163.0,
            "2021": 2183022.0,
            "2022": 2539461.0,
            "2023": 3265397.0,
            "2024": 2612317.6000000001,
            "2025": 2690687.128,
            "2026": 2771407.7418400003,
            "2027": 2854549.9740952002,
            "2028": 2940186.4733180562,
          },
          {
            "G&A": "professional fees",
            "2019": 210555.0,
            "2020": 181018.0,
            "2021": 232854.0,
            "2022": 283412.0,
            "2023": 415772.0,
            "2024": 428245.16,
            "2025": 441092.5148000001,
            "2026": 454325.2902440001,
            "2027": 467955.0489513201,
            "2028": 481993.7004198597,
          },
          {
            "G&A": "impairment on trade receivables",
            "2019": 0.0,
            "2020": 3658377.0,
            "2021": -881479.0,
            "2022": -1974398.0,
            "2023": 0.0,
            "2024": 0.0,
            "2025": 0.0,
            "2026": 0.0,
            "2027": 0.0,
            "2028": 0.0,
          },
          {
            "G&A": "other",
            "2019": 46513.0,
            "2020": 34933.0,
            "2021": 300253.0,
            "2022": 103902.0,
            "2023": 75371.0,
            "2024": 77632.13,
            "2025": 79961.0939,
            "2026": 82359.926717,
            "2027": 84830.72451851,
            "2028": 87375.6462540653,
          },
          {
            "G&A": "total",
            "2019": 3360967.0,
            "2020": 6874582.0,
            "2021": 2658963.0,
            "2022": 1806263.0,
            "2023": 4603718.0,
            "2024": 3990788.23,
            "2025": 4110511.8769,
            "2026": 4233827.2332070004,
            "2027": 4360842.0502032097,
            "2028": 4491667.3117093071,
          },
        ],
      });
    }
  }, [ga_ExpensesData]);
  return (
    <div>
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">
          General Administrative Expenses
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
        <LoadingDataGrid columns={ga_ExpensesDataColumns} />
      ) : ga_ExpensesData && ga_ExpensesData.data.length > 0 ? (
        <DataGrid
          columns={ga_ExpensesDataColumns}
          rows={getMappedGA_ExpensesRows({
            gaExpensesData: ga_ExpensesData.data,
            toggleValue: expensesToggle,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      <p className="text-3xl font-normal text-start mb-4">
        Assumption Data for General Administrative Expenses
      </p>
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
              const updatedAssumptionData = removeDuplicateGA_AssumptionData(
                ga_assumptionData.data
              );
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

      <p className="text-3xl font-normal text-start mb-4">
        General Administrative Key Indicators
      </p>
      {isGA_KeyIndicatorPending ? (
        <LoadingDataGrid columns={ga_IndicatorsDataColumns} />
      ) : GA_KeyIndicatorData && GA_KeyIndicatorData.data.length > 0 ? (
        <DataGrid
          columns={ga_IndicatorsDataColumns}
          rows={getMappedGA_IndicatorsRows({
            gaIndicatorsData: GA_KeyIndicatorData.data,
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
      {isGA_PercentageOfRevenuePending ? (
        <LoadingDataGrid columns={ga_PercentageOfRevenueDataColumns} />
      ) : GA_PercentageOfRevenueData &&
        GA_PercentageOfRevenueData.data.length > 0 ? (
        <DataGrid
          columns={ga_PercentageOfRevenueDataColumns}
          rows={getMappedGA_PercentageOfRevenueRows({
            gaPercentageOfRevenueData: GA_PercentageOfRevenueData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
      <div className="flex justify-between my-4">
        <p className="text-3xl font-normal text-start mb-4">Annual Growth</p>
      </div>
      {isGA_AnnualGrowthPending ? (
        <LoadingDataGrid columns={ga_AnnualGrowthDataColumns} />
      ) : GA_AnnualGrowthData && GA_AnnualGrowthData.data.length > 0 ? (
        <DataGrid
          columns={ga_AnnualGrowthDataColumns}
          rows={getMappedGA_AnnualGrowthRows({
            gaAnnualGrowthData: GA_AnnualGrowthData.data,
          })}
        />
      ) : (
        <>No Record Found!</>
      )}
    </div>
  );
};

export default GA_Expenses;
