import { Type } from "typescript";
import {
  AssumptionResponseType,
  BalanceSheetResponseType,
  CalculatedAssumptionType,
  DebtResponseType,
  EquityResponseType,
  FixedAssetResponseType,
  Is_CRNT_ResponseType,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";
import { ColumnTypes } from "../../../../types/generalTypes";

export const Is_CRNT_DataColumns: ColumnTypes[] = [
  { name: "Components", minWidth: "10%" },
  { name: "2017", minWidth: "10%" },
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
];
export const workingCapitalDataColumns: ColumnTypes[] = [
  { name: "SAR", minWidth: "10%" },
  { name: "Notes", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
];
export const fixedAssetDataColumns: ColumnTypes[] = [
  { name: "FA", minWidth: "10%" },
  { name: "2019", minWidth: "10%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
];
export const balanceSheetDataColumns: ColumnTypes[] = [
  { name: "BALANCE SHEET", minWidth: "10%" },
  { name: "2019", minWidth: "10%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
];

export const debtDataColumns: ColumnTypes[] = [
  { name: "DEBT", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
];
export const equityDataColumns: ColumnTypes[] = [
  { name: "EQUITY", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
];

export const assumptionDataColumns: ColumnTypes[] = [
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
export const calculatedAssumptionsColumns: ColumnTypes[] = [
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
export const getMappedAssumptionRows = ({
  assumptionData,
  checked,
  isCalculatedAssumptionsLoading,
  onChange,
  selectedAssumption,
}: {
  assumptionData: AssumptionResponseType[];
  onChange: (index: number) => Promise<void>;
  checked: boolean[];
  selectedAssumption: AssumptionResponseType | undefined;
  isCalculatedAssumptionsLoading: boolean;
}) => {
  return assumptionData.map((data, index) => {
    return {
      key1: data["COMPONENT "],
      select: {
        isChecked: checked[index] ?? false,
        isLoading:
          selectedAssumption &&
          selectedAssumption["COMPONENT "] === data["COMPONENT "]
            ? isCalculatedAssumptionsLoading
            : false,
        onChange: () => onChange(index),
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
  });
};
export const getMappedIs_CRNT_Rows = (Is_CRNTData: Is_CRNT_ResponseType) => {
  return Is_CRNTData.map((data) => {
    return {
      key1: data.components,
      key2: data[2017],
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
    };
  });
};
export const getMappedWorkingCapitalRows = (
  workingCapitalData: WorkingCapitalResponseType
) => {
  return workingCapitalData.map((data) => {
    return {
      key1: data.SAR,
      key2: data.Notes,
      key3: data[2019],
      key4: data[2020],
      key5: data[2021],
      key6: data[2022],
      key7: data[2023],
      key8: data[2024],
      key9: data[2025],
      key10: data[2026],
      key11: data[2027],
    };
  });
};

export const getMappedFixedAssetRows = (
  fixedAssetData: FixedAssetResponseType
) => {
  return fixedAssetData.map((data) => {
    return {
      key1: data.FA,
      key2: data[2019],
      key3: data[2020],
      key4: data[2021],
      key5: data[2022],
      key6: data[2023],
      key7: data[2024],
      key8: data[2025],
      key9: data[2026],
      key10: data[2027],
    };
  });
};

export const getMappedBalanceSheetRows = (
  balanceSheetData: BalanceSheetResponseType
) => {
  return balanceSheetData.map((data) => {
    return {
      key1: data["BALANCE SHEET"],
      key2: data[2019],
      key3: data[2020],
      key4: data[2021],
      key5: data[2022],
      key6: data[2023],
      key7: data[2024],
      key8: data[2025],
      key9: data[2026],
      key10: data[2027],
    };
  });
};

export const getMappedDebtRows = ({
  debtData,
}: {
  debtData: DebtResponseType;
}) => {
  return debtData.map((data) => {
    return {
      key1: data.DEBT,
      key2: data[2019],
      key3: data[2020],
      key4: data[2021],
      key5: data[2022],
      key6: data[2023],
      key7: data[2024],
      key8: data[2025],
      key9: data[2026],
      key10: data[2027],
    };
  });
};
export const getMappedEquityRows = ({
  equityData,
}: {
  equityData: EquityResponseType;
}) => {
  return equityData.map((data) => {
    return {
      key1: data.EQUITY,
      key2: data[2019],
      key3: data[2020],
      key4: data[2021],
      key5: data[2022],
      key6: data[2023],
      key7: data[2024],
      key8: data[2025],
      key9: data[2026],
      key10: data[2027],
    };
  });
};

export const getMappedCalculatedAssumptionsRows = (
  calculatedAssumptionsData: CalculatedAssumptionType
) => {
  return calculatedAssumptionsData.map((data) => {
    return {
      year: data.year,
      revenue: data.revenue,
      "cost of revenues": data["cost of revenues"],
      "gross profit": data["gross profit"],
      "operating expenses": data["operating expenses"],
      "selling and marketing expenses": data["selling and marketing expenses"],
      "general and administrative expenses":
        data["general and administrative expenses"],
      "profit from operations": data["profit from operations"],
      "other income/(expense)": data["other income/(expense)"],
      "share of income from equity accounted investment":
        data["share of income from equity accounted investment"],
      "fair value loss on investments": data["fair value loss on investments"],
      dividends: data.dividends,
      "other expenses": data["other expenses"],
      "other income": data["other income"],
      "finance cost": data["finance cost"],
      "profit / loss before zakat": data["profit / loss before zakat"],
      zakat: data.zakat,
      "net loss for the year": data["net loss for the year"],
      "re-measurements of employee termination benefits":
        data["re-measurements of employee termination benefits"],
      "other comprehensive income": data["other comprehensive income"],
      "total comprehensive loss for the year":
        data["total comprehensive loss for the year"],
    };
  });
};
