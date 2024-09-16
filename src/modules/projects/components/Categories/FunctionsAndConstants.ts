import {
  AssumptionResponseType,
  BalanceSheetResponseType,
  DebtResponseType,
  EquityResponseType,
  FixedAssetResponseType,
  GA_AssumptionResponseType,
  GA_AssumptionResponseTypeArray,
  GA_ExpensesResponseType,
  Is_CRNT_ResponseType,
  SM_AssumptionResponseType,
  SM_AssumptionResponseTypeArray,
  SM_ExpensesResponseType,
  WorkingCapitalIndicatorsResponseType,
  WorkingCapitalIndicatorsResponseTypeArray,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";
import {
  GA_AnnualGrowthResponseType,
  GA_IndicatorsResponseType,
  GA_PercentageOfRevenueResponse,
} from "../../../../types/GATypes";
import {
  SM_AnnualGrowthResponseType,
  SM_PercentageOfRevenueResponse,
} from "../../../../types/SMTypes";
import { ColumnTypes, ToggleValue } from "../../../../types/generalTypes";
import { formatToggleNumber } from "../../../../utilities/helper";

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
export const workingCapitalIndicatorsDataColumns: ColumnTypes[] = [
  { name: "SAR", minWidth: "10%" },
  { name: "Notes", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
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
  { name: "Base", minWidth: "10%" },
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

export const ga_assumptionDataColumns: ColumnTypes[] = [
  { name: "COMPONENT", minWidth: "10%" },
  { name: "Base", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];
export const sm_assumptionDataColumns: ColumnTypes[] = [
  { name: "COMPONENT", minWidth: "10%" },
  { name: "Base", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];

export const ga_ExpensesDataColumns: ColumnTypes[] = [
  { name: "GENERAL & ADMINISTRATIVE EXPENSES", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];
export const ga_AnnualGrowthDataColumns: ColumnTypes[] = [
  { name: "G&A", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];
export const ga_PercentageOfRevenueDataColumns: ColumnTypes[] = [
  { name: "G&A", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];

export const ga_IndicatorsDataColumns: ColumnTypes[] = [
  { name: "KEY INDICATORS", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];

export const sm_IndicatorsDataColumns: ColumnTypes[] = [
  { name: "KEY INDICATORS", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];
export const sm_AnnualGrowthDataColumns: ColumnTypes[] = [
  { name: "G&A", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
];
export const sm_ExpensesDataColumns: ColumnTypes[] = [
  { name: "SELLING & MARKETING", minWidth: "10%" },
  { name: "2019", minWidth: "30%" },
  { name: "2020", minWidth: "10%" },
  { name: "2021", minWidth: "10%" },
  { name: "2022", minWidth: "10%" },
  { name: "2023", minWidth: "10%" },
  { name: "2024", minWidth: "10%" },
  { name: "2025", minWidth: "10%" },
  { name: "2026", minWidth: "10%" },
  { name: "2027", minWidth: "10%" },
  { name: "2028", minWidth: "10%" },
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

export const removeDuplicateAssumptionData = (
  assumptionData: AssumptionResponseType[]
) => {
  const uniqueData: AssumptionResponseType[] = [];
  for (let i = 0; i < assumptionData.length; i++) {
    if (
      uniqueData.findIndex(
        (data) => data.COMPONENT === assumptionData[i].COMPONENT
      ) === -1
    ) {
      uniqueData.push(assumptionData[i]);
    }
  }
  return uniqueData;
};
export const removeDuplicateGA_AssumptionData = (
  ga_assumptionData: GA_AssumptionResponseTypeArray
) => {
  const uniqueData: GA_AssumptionResponseTypeArray = [];
  for (let i = 0; i < ga_assumptionData.length; i++) {
    if (
      uniqueData.findIndex(
        (data) => data.COMPONENT === ga_assumptionData[i].COMPONENT
      ) === -1
    ) {
      uniqueData.push(ga_assumptionData[i]);
    }
  }
  return uniqueData;
};
export const removeDuplicateSM_AssumptionData = (
  sm_assumptionData: SM_AssumptionResponseTypeArray
) => {
  const uniqueData: SM_AssumptionResponseTypeArray = [];
  for (let i = 0; i < sm_assumptionData.length; i++) {
    if (
      uniqueData.findIndex(
        (data) => data.COMPONENT === sm_assumptionData[i].COMPONENT
      ) === -1
    ) {
      uniqueData.push(sm_assumptionData[i]);
    }
  }
  return uniqueData;
};

export function setObjKeyValue<KeyType extends keyof AssumptionResponseType>({
  index,
  key,
  obj,
  value,
}: {
  key: KeyType;
  value: AssumptionResponseType[KeyType];
  obj: AssumptionResponseType[];
  index: number;
}): AssumptionResponseType[] {
  obj[index][key] = value;
  return obj;
}
export function setIndicatorsObjKeyValue<
  KeyType extends keyof WorkingCapitalIndicatorsResponseType
>({
  index,
  key,
  obj,
  value,
}: {
  key: KeyType;
  value: WorkingCapitalIndicatorsResponseType[KeyType];
  obj: WorkingCapitalIndicatorsResponseType[];
  index: number;
}): WorkingCapitalIndicatorsResponseTypeArray {
  obj[index][key] = value;
  return obj;
}

export function setGA_AssumptionObjKeyValue<
  KeyType extends keyof GA_AssumptionResponseType
>({
  index,
  key,
  obj,
  value,
}: {
  key: KeyType;
  value: GA_AssumptionResponseType[KeyType];
  obj: GA_AssumptionResponseType[];
  index: number;
}): GA_AssumptionResponseType[] {
  obj[index][key] = value;
  return obj;
}

export function setSM_AssumptionObjKeyValue<
  KeyType extends keyof SM_AssumptionResponseType
>({
  index,
  key,
  obj,
  value,
}: {
  key: KeyType;
  value: SM_AssumptionResponseType[KeyType];
  obj: SM_AssumptionResponseType[];
  index: number;
}): SM_AssumptionResponseType[] {
  obj[index][key] = value;
  return obj;
}

export const getMappedAssumptionRows = ({
  assumptionData,
  selectedKeyIndex,
  onChange,
  onTextChange,
  onEditClick,
  onSaveClick,
}: {
  assumptionData: AssumptionResponseType[];
  selectedKeyIndex: {
    index: number;
    key: keyof AssumptionResponseType;
  } | null;
  onTextChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    keyName: keyof AssumptionResponseType
  ) => void;
  onEditClick: (
    selectedIndex: number,
    selectedKey: keyof AssumptionResponseType
  ) => void;
  onSaveClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
}) => {
  const uniqueData = removeDuplicateAssumptionData(assumptionData);
  const currentYear = new Date().getFullYear();
  return uniqueData.map((data) => {
    const map: { [x: string]: string | number | boolean | {} } = {
      0: data.COMPONENT,
      1: {
        displayType: "select",
        defaultValue: data.BASE,
        onChange: onChange,
      },
    };
    Object.keys(data)
      .filter((key) => /^\d+$/.test(key))
      .forEach((keyData) => {
        const key: keyof AssumptionResponseType =
          keyData as keyof AssumptionResponseType;
        if (Number(key) >= currentYear) {
          map[key] = {
            data: data[key as keyof AssumptionResponseType],
            isPercentageData: true,
            onTextChange: onTextChange,
            onEditClick: onEditClick,
            onSaveClick: onSaveClick,
            selectedKeyIndex: selectedKeyIndex,
          };
        } else {
          map[key] = `${(
            Number(data[key as keyof AssumptionResponseType]) * 100
          ).toPrecision(2)}%`;
        }
      });
    return map;
  });
};

export const getMappedGA_ExpensesRows = ({
  gaExpensesData,
  toggleValue,
}: {
  gaExpensesData: GA_ExpensesResponseType;
  toggleValue: ToggleValue;
}) => {
  return gaExpensesData.map((data) => {
    return {
      key1: data["G&A"],
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
      key11: formatToggleNumber(data[2028], toggleValue) ?? "NA",
    };
  });
};
export const getMappedGA_IndicatorsRows = ({
  gaIndicatorsData,
}: {
  gaIndicatorsData: GA_IndicatorsResponseType;
}) => {
  return gaIndicatorsData.map((data) => {
    return {
      key1: data["KEY INDICATORS"],
      key2: data[2019] ?? "NA",
      key3: data[2020] ?? "NA",
      key4: data[2021] ?? "NA",
      key5: data[2022] ?? "NA",
      key6: data[2023] ?? "NA",
      key7: data[2024] ?? "NA",
      key8: data[2025] ?? "NA",
      key9: data[2026] ?? "NA",
      key10: data[2027] ?? "NA",
      key11: data[2028] ?? "NA",
    };
  });
};
export const getMappedGA_AnnualGrowthRows = ({
  gaAnnualGrowthData,
}: {
  gaAnnualGrowthData: GA_AnnualGrowthResponseType;
}) => {
  return gaAnnualGrowthData.map((data) => {
    return {
      key1: data["G&A"],
      key2: `${(Number(data[2019]) * 100).toPrecision(3)}%`,
      key3: `${(Number(data[2020]) * 100).toPrecision(3)}%`,
      key4: `${(Number(data[2021]) * 100).toPrecision(3)}%`,
      key5: `${(Number(data[2022]) * 100).toPrecision(3)}%`,
      key6: `${(Number(data[2023]) * 100).toPrecision(3)}%`,
      key7: `${(Number(data[2024]) * 100).toPrecision(3)}%`,
      key8: `${(Number(data[2025]) * 100).toPrecision(3)}%`,
      key9: `${(Number(data[2026]) * 100).toPrecision(3)}%`,
      key10: `${(Number(data[2027]) * 100).toPrecision(3)}%`,
      key11: `${(Number(data[2028]) * 100).toPrecision(3)}%`,
    };
  });
};
export const getMappedGA_PercentageOfRevenueRows = ({
  gaPercentageOfRevenueData,
}: {
  gaPercentageOfRevenueData: GA_PercentageOfRevenueResponse;
}) => {
  return gaPercentageOfRevenueData.map((data) => {
    return {
      key1: data["G&A"],
      key2: `${(Number(data[2019]) * 100).toPrecision(3)}%`,
      key3: `${(Number(data[2020]) * 100).toPrecision(3)}%`,
      key4: `${(Number(data[2021]) * 100).toPrecision(3)}%`,
      key5: `${(Number(data[2022]) * 100).toPrecision(3)}%`,
      key6: `${(Number(data[2023]) * 100).toPrecision(3)}%`,
      key7: `${(Number(data[2024]) * 100).toPrecision(3)}%`,
      key8: `${(Number(data[2025]) * 100).toPrecision(3)}%`,
      key9: `${(Number(data[2026]) * 100).toPrecision(3)}%`,
      key10: `${(Number(data[2027]) * 100).toPrecision(3)}%`,
      key11: `${(Number(data[2028]) * 100).toPrecision(3)}%`,
    };
  });
};

export const getMappedSM_IndicatorRows = ({
  smIndicatorsData,
}: {
  smIndicatorsData: GA_IndicatorsResponseType;
}) => {
  return smIndicatorsData.map((data) => {
    return {
      key1: data["KEY INDICATORS"],
      key2: data[2019] ?? "NA",
      key3: data[2020] ?? "NA",
      key4: data[2021] ?? "NA",
      key5: data[2022] ?? "NA",
      key6: data[2023] ?? "NA",
      key7: data[2024] ?? "NA",
      key8: data[2025] ?? "NA",
      key9: data[2026] ?? "NA",
      key10: data[2027] ?? "NA",
      key11: data[2028] ?? "NA",
    };
  });
};

export const getMappedSM_AnnualGrowthRows = ({
  smAnnualGrowthData,
}: {
  smAnnualGrowthData: SM_AnnualGrowthResponseType;
}) => {
  return smAnnualGrowthData.map((data) => {
    return {
      key1: data["G&A"],
      key2: `${(Number(data[2019]) * 100).toPrecision(3)}%`,
      key3: `${(Number(data[2020]) * 100).toPrecision(3)}%`,
      key4: `${(Number(data[2021]) * 100).toPrecision(3)}%`,
      key5: `${(Number(data[2022]) * 100).toPrecision(3)}%`,
      key6: `${(Number(data[2023]) * 100).toPrecision(3)}%`,
      key7: `${(Number(data[2024]) * 100).toPrecision(3)}%`,
      key8: `${(Number(data[2025]) * 100).toPrecision(3)}%`,
      key9: `${(Number(data[2026]) * 100).toPrecision(3)}%`,
      key10: `${(Number(data[2027]) * 100).toPrecision(3)}%`,
      key11: `${(Number(data[2028]) * 100).toPrecision(3)}%`,
    };
  });
};

export const getMappedSM_PercentageOfRevenueRows = ({
  smPercentageOfRevenueData,
}: {
  smPercentageOfRevenueData: SM_PercentageOfRevenueResponse;
}) => {
  return smPercentageOfRevenueData.map((data) => {
    return {
      key1: data["G&A"],
      key2: `${(Number(data[2019]) * 100).toPrecision(3)}%`,
      key3: `${(Number(data[2020]) * 100).toPrecision(3)}%`,
      key4: `${(Number(data[2021]) * 100).toPrecision(3)}%`,
      key5: `${(Number(data[2022]) * 100).toPrecision(3)}%`,
      key6: `${(Number(data[2023]) * 100).toPrecision(3)}%`,
      key7: `${(Number(data[2024]) * 100).toPrecision(3)}%`,
      key8: `${(Number(data[2025]) * 100).toPrecision(3)}%`,
      key9: `${(Number(data[2026]) * 100).toPrecision(3)}%`,
      key10: `${(Number(data[2027]) * 100).toPrecision(3)}%`,
      key11: `${(Number(data[2028]) * 100).toPrecision(3)}%`,
    };
  });
};

export const getMappedSM_ExpensesRows = ({
  smExpensesData,
  toggleValue,
}: {
  smExpensesData: SM_ExpensesResponseType;
  toggleValue: ToggleValue;
}) => {
  return smExpensesData.map((data) => {
    return {
      key1: data["G&A"],
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
      key11: formatToggleNumber(data[2028], toggleValue) ?? "NA",
    };
  });
};

export const getMappedGA_AssumptionRows = ({
  assumptionData,
  selectedKeyIndex,
  onChange,
  onTextChange,
  onEditClick,
  onSaveClick,
}: {
  assumptionData: GA_AssumptionResponseTypeArray;
  selectedKeyIndex: {
    index: number;
    key: keyof GA_AssumptionResponseType;
  } | null;
  onTextChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    keyName: keyof GA_AssumptionResponseType
  ) => void;
  onEditClick: (
    selectedIndex: number,
    selectedKey: keyof GA_AssumptionResponseType
  ) => void;
  onSaveClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
}) => {
  const uniqueData = removeDuplicateGA_AssumptionData(assumptionData);
  console.log("assumptionData = ", uniqueData);

  const currentYear = new Date().getFullYear();
  return uniqueData.map((data) => {
    const map: { [x: string]: string | number | boolean | {} } = {
      0: data.COMPONENT,
      1: {
        displayType: "select",
        defaultValue: data.BASE,
        onChange: onChange,
      },
    };
    Object.keys(data)
      .filter((key) => /^\d+$/.test(key))
      .forEach((keyData) => {
        const key: keyof GA_AssumptionResponseType =
          keyData as keyof GA_AssumptionResponseType;
        if (Number(key) >= currentYear) {
          map[key] = {
            data: data[key as keyof GA_AssumptionResponseType],
            onTextChange: onTextChange,
            onEditClick: onEditClick,
            onSaveClick: onSaveClick,
            selectedKeyIndex: selectedKeyIndex,
          };
        } else {
          map[key] = Number(
            data[key as keyof GA_AssumptionResponseType]
          ).toPrecision(2);
        }
      });
    return map;
  });
};

export const getMappedSM_AssumptionRows = ({
  assumptionData,
  selectedKeyIndex,
  onChange,
  onTextChange,
  onEditClick,
  onSaveClick,
}: {
  assumptionData: SM_AssumptionResponseTypeArray;
  selectedKeyIndex: {
    index: number;
    key: keyof SM_AssumptionResponseType;
  } | null;
  onTextChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    keyName: keyof SM_AssumptionResponseType
  ) => void;
  onEditClick: (
    selectedIndex: number,
    selectedKey: keyof SM_AssumptionResponseType
  ) => void;
  onSaveClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
}) => {
  const uniqueData = removeDuplicateSM_AssumptionData(assumptionData);
  const currentYear = new Date().getFullYear();
  return uniqueData.map((data) => {
    const map: { [x: string]: string | number | boolean | {} } = {
      0: data.COMPONENT,
      1: {
        displayType: "select",
        defaultValue: data.BASE,
        onChange: onChange,
      },
    };
    Object.keys(data)
      .filter((key) => /^\d+$/.test(key))
      .forEach((keyData) => {
        const key: keyof SM_AssumptionResponseType =
          keyData as keyof SM_AssumptionResponseType;
        if (Number(key) >= currentYear) {
          map[key] = {
            data: data[key as keyof SM_AssumptionResponseType],
            onTextChange: onTextChange,
            onEditClick: onEditClick,
            onSaveClick: onSaveClick,
            selectedKeyIndex: selectedKeyIndex,
          };
        } else {
          map[key] = Number(
            data[key as keyof SM_AssumptionResponseType]
          ).toPrecision(2);
        }
      });
    return map;
  });
};
export const getMappedIs_CRNT_Rows = (
  Is_CRNTData: Is_CRNT_ResponseType,
  toggleValue: ToggleValue
) => {
  return Is_CRNTData.map((data) => {
    return {
      key1: data.components,
      key2: formatToggleNumber(data[2017], toggleValue),
      key3: formatToggleNumber(data[2018], toggleValue),
      key4: formatToggleNumber(data[2019], toggleValue),
      key5: formatToggleNumber(data[2020], toggleValue),
      key6: formatToggleNumber(data[2021], toggleValue),
      key7: formatToggleNumber(data[2022], toggleValue),
      key8: formatToggleNumber(data[2023], toggleValue),
      key9: formatToggleNumber(Number(data[2024]), toggleValue),
      key10: formatToggleNumber(Number(data[2025]), toggleValue),
      key11: formatToggleNumber(Number(data[2026]), toggleValue),
      key12: formatToggleNumber(Number(data[2027]), toggleValue),
    };
  });
};

export const getMappedWorrkingCapitalEditableRows = ({
  workingCapitalIndicatorsData,
  onTextChange,
  onEditClick,
  onSaveClick,
  toggleValue,
  selectedKeyIndex,
}: {
  toggleValue: ToggleValue;
  selectedKeyIndex: {
    index: number;
    key: keyof WorkingCapitalIndicatorsResponseType;
  } | null;
  workingCapitalIndicatorsData: WorkingCapitalIndicatorsResponseTypeArray;
  onTextChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    keyName: keyof WorkingCapitalIndicatorsResponseType
  ) => void;
  onEditClick: (
    selectedIndex: number,
    selectedKey: keyof WorkingCapitalIndicatorsResponseType
  ) => void;
  onSaveClick: () => void;
}) => {
  return workingCapitalIndicatorsData.map((data) => {
    const map: { [x: string]: string | number | boolean | {} } = {
      0: data.SAR,
      1: data.Notes,
    };
    Object.keys(data)
      .filter((key) => /^\d+$/.test(key))
      .forEach((keyData) => {
        const key: keyof WorkingCapitalIndicatorsResponseType =
          keyData as keyof WorkingCapitalIndicatorsResponseType;
        map[key] = {
          defaultValue: data[key as keyof WorkingCapitalIndicatorsResponseType],
          data: formatToggleNumber(
            Number(data[key as keyof WorkingCapitalIndicatorsResponseType]),
            toggleValue
          ),
          onTextChange: onTextChange,
          onEditClick: onEditClick,
          onSaveClick: onSaveClick,
          selectedKeyIndex: selectedKeyIndex,
        };
      });
    return map;
  });
};
export const getMappedWorkingCapitalRows = (
  workingCapitalData: WorkingCapitalResponseType,
  toggleValue: ToggleValue
) => {
  return workingCapitalData.map((data) => {
    return {
      key1: data.SAR,
      key2: data.Notes,
      key3: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key11: formatToggleNumber(data[2027], toggleValue) ?? "NA",
    };
  });
};

export const getMappedFixedAssetRows = (
  fixedAssetData: FixedAssetResponseType,
  toggleValue: ToggleValue
) => {
  return fixedAssetData.map((data) => {
    return {
      key1: data.FA,
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
    };
  });
};

export const getMappedBalanceSheetRows = (
  balanceSheetData: BalanceSheetResponseType,
  toggleValue: ToggleValue
) => {
  return balanceSheetData.map((data) => {
    return {
      key1: data["BALANCE SHEET"],
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
    };
  });
};

export const getMappedDebtRows = ({
  debtData,
  toggleValue,
}: {
  toggleValue: ToggleValue;
  debtData: DebtResponseType;
}) => {
  return debtData.map((data) => {
    return {
      key1: data.DEBT,
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
    };
  });
};
export const getMappedEquityRows = ({
  equityData,
  toggleValue,
}: {
  toggleValue: ToggleValue;
  equityData: EquityResponseType;
}) => {
  return equityData.map((data) => {
    return {
      key1: data.EQUITY,
      key2: formatToggleNumber(data[2019], toggleValue) ?? "NA",
      key3: formatToggleNumber(data[2020], toggleValue) ?? "NA",
      key4: formatToggleNumber(data[2021], toggleValue) ?? "NA",
      key5: formatToggleNumber(data[2022], toggleValue) ?? "NA",
      key6: formatToggleNumber(data[2023], toggleValue) ?? "NA",
      key7: formatToggleNumber(data[2024], toggleValue) ?? "NA",
      key8: formatToggleNumber(data[2025], toggleValue) ?? "NA",
      key9: formatToggleNumber(data[2026], toggleValue) ?? "NA",
      key10: formatToggleNumber(data[2027], toggleValue) ?? "NA",
    };
  });
};
