export type AssumptionResponseType = {
  "COMPONENT ": string;
  BASE: string;
  Select: boolean;
  "2018": number;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
};

export type Is_CRNT_ResponseType = {
  components: string;
  "2017": number;
  "2018": number;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
}[];

export type WorkingCapitalResponseType = {
  SAR: string;
  Notes: string | null;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
}[];

export type DebtResponseType = {
  DEBT: string;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
}[];

export type FixedAssetResponseType = {
  FA: string;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
}[];

export type EquityResponseType = [
  {
    EQUITY: string;
    "2019": number;
    "2020": number;
    "2021": number;
    "2022": number;
    "2023": number;
    "2024": number;
    "2025": number;
    "2026": number;
    "2027": number;
  }
];

export type BalanceSheetResponseType = [
  {
    "BALANCE SHEET": string;
    "2019": number;
    "2020": number;
    "2021": number;
    "2022": number;
    "2023": number;
    "2024": number;
    "2025": number;
    "2026": number;
    "2027": number;
  }
];
export type NewAssumptionDataType = {
  "COMPONENT ": string;
  BASE: string;
  Select: boolean;
  "2018 ": number;
  "2019 ": number;
  "2020 ": number;
  "2021 ": number;
  "2022 ": number;
  "2023 ": number;
  "2024 ": number;
  "2025 ": number;
  "2026 ": number;
  "2027 ": number;
};

export type CalculatedAssumptionType = {
  year: string | number;
  revenue: number;
  "cost of revenues": number;
  "gross profit": number;
  "operating expenses": number;
  "selling and marketing expenses": number;
  "general and administrative expenses": number;
  "profit from operations": number;
  "other income/(expense)": number;
  "share of income from equity accounted investment": number;
  "fair value loss on investments": number;
  dividends: number;
  "other expenses": number;
  "other income": number;
  "finance cost": number;
  "profit / loss before zakat": number;
  zakat: number;
  "net loss for the year": number;
  "re-measurements of employee termination benefits": number;
  "other comprehensive income": number;
  "total comprehensive loss for the year": number;
}[];
