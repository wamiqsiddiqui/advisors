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
export const setToSales = (assumptionData: AssumptionResponseType[]) => {
  let salesCount = 0;
  let yoyCount = 0;
  assumptionData.forEach((data) => {
    if (data.BASE === "Sales%") salesCount++;
    if (data.BASE === "YoY%") yoyCount++;
  });
  if (salesCount > 1 || yoyCount > 1) {
    assumptionData.forEach((data) => {
      data.BASE = "Sales%";
    });
  }
  return assumptionData;
};
export const removeDuplicateAssumptionData = (
  assumptionData: AssumptionResponseType[]
) => {
  const uniqueData: AssumptionResponseType[] = [];
  for (let i = 0; i < assumptionData.length; i++) {
    if (
      uniqueData.findIndex(
        (data) => data["COMPONENT "] === assumptionData[i]["COMPONENT "]
      ) === -1
    ) {
      uniqueData.push(assumptionData[i]);
    }
  }
  // const updatedData = setToSales(uniqueData);
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
      0: data["COMPONENT "],
      1: {
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
            onChange: onTextChange,
            onEditClick: onEditClick,
            onSaveClick: onSaveClick,
            selectedKeyIndex: selectedKeyIndex,
          };
        } else {
          map[key] = Number(
            data[key as keyof AssumptionResponseType]
          ).toPrecision(2);
        }
      });
    return map;
  });
};
export const getMappedIs_CRNT_Rows = (Is_CRNTData: Is_CRNT_ResponseType) => {
  return Is_CRNTData.map((data) => {
    return {
      key1: data.components,
      key2: data[2017]?.toPrecision(2) ?? "NA",
      key3: data[2018]?.toPrecision(2) ?? "NA",
      key4: data[2019]?.toPrecision(2) ?? "NA",
      key5: data[2020]?.toPrecision(2) ?? "NA",
      key6: data[2021]?.toPrecision(2) ?? "NA",
      key7: data[2022]?.toPrecision(2) ?? "NA",
      key8: data[2023]?.toPrecision(2) ?? "NA",
      key9: Number(data[2024])?.toPrecision(2) ?? "NA",
      key10: Number(data[2025])?.toPrecision(2) ?? "NA",
      key11: Number(data[2026])?.toPrecision(2) ?? "NA",
      key12: Number(data[2027])?.toPrecision(2) ?? "NA",
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
      key3: data[2019]?.toPrecision(2) ?? "NA",
      key4: data[2020]?.toPrecision(2) ?? "NA",
      key5: data[2021]?.toPrecision(2) ?? "NA",
      key6: data[2022]?.toPrecision(2) ?? "NA",
      key7: data[2023]?.toPrecision(2) ?? "NA",
      key8: data[2024]?.toPrecision(2) ?? "NA",
      key9: data[2025]?.toPrecision(2) ?? "NA",
      key10: data[2026]?.toPrecision(2) ?? "NA",
      key11: data[2027]?.toPrecision(2) ?? "NA",
    };
  });
};

export const getMappedFixedAssetRows = (
  fixedAssetData: FixedAssetResponseType
) => {
  return fixedAssetData.map((data) => {
    return {
      key1: data.FA,
      key2: data[2019]?.toPrecision(2) ?? "NA",
      key3: data[2020]?.toPrecision(2) ?? "NA",
      key4: data[2021]?.toPrecision(2) ?? "NA",
      key5: data[2022]?.toPrecision(2) ?? "NA",
      key6: data[2023]?.toPrecision(2) ?? "NA",
      key7: data[2024]?.toPrecision(2) ?? "NA",
      key8: data[2025]?.toPrecision(2) ?? "NA",
      key9: data[2026]?.toPrecision(2) ?? "NA",
      key10: data[2027]?.toPrecision(2) ?? "NA",
    };
  });
};

export const getMappedBalanceSheetRows = (
  balanceSheetData: BalanceSheetResponseType
) => {
  return balanceSheetData.map((data) => {
    return {
      key1: data["BALANCE SHEET"],
      key2: data[2019]?.toPrecision(2) ?? "NA",
      key3: data[2020]?.toPrecision(2) ?? "NA",
      key4: data[2021]?.toPrecision(2) ?? "NA",
      key5: data[2022]?.toPrecision(2) ?? "NA",
      key6: data[2023]?.toPrecision(2) ?? "NA",
      key7: data[2024]?.toPrecision(2) ?? "NA",
      key8: data[2025]?.toPrecision(2) ?? "NA",
      key9: data[2026]?.toPrecision(2) ?? "NA",
      key10: data[2027]?.toPrecision(2) ?? "NA",
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
      key2: data[2019]?.toPrecision(2) ?? "NA",
      key3: data[2020]?.toPrecision(2) ?? "NA",
      key4: data[2021]?.toPrecision(2) ?? "NA",
      key5: data[2022]?.toPrecision(2) ?? "NA",
      key6: data[2023]?.toPrecision(2) ?? "NA",
      key7: data[2024]?.toPrecision(2) ?? "NA",
      key8: data[2025]?.toPrecision(2) ?? "NA",
      key9: data[2026]?.toPrecision(2) ?? "NA",
      key10: data[2027]?.toPrecision(2) ?? "NA",
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
      key2: data[2019]?.toPrecision(2) ?? "NA",
      key3: data[2020]?.toPrecision(2) ?? "NA",
      key4: data[2021]?.toPrecision(2) ?? "NA",
      key5: data[2022]?.toPrecision(2) ?? "NA",
      key6: data[2023]?.toPrecision(2) ?? "NA",
      key7: data[2024]?.toPrecision(2) ?? "NA",
      key8: data[2025]?.toPrecision(2) ?? "NA",
      key9: data[2026]?.toPrecision(2) ?? "NA",
      key10: data[2027]?.toPrecision(2) ?? "NA",
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
