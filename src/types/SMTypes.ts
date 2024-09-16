export type SM_KeyIndicatorRequestType = {
  df_is_crnt: {
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
  sm_expenses: {
    "G&A": string;
    "2019": number;
    "2020": number;
    "2021": number;
    "2022": number;
    "2023": number;
    "2024": number;
    "2025": number;
    "2026": number;
    "2027": number;
    "2028": number;
  }[];
};

export type SM_KeyIndicatorResponseType = {
  "KEY INDICATORS": string;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
  "2028": number;
}[];

export type SM_AnnualGrowthResponseType = {
  "G&A": string;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
  "2028": number;
}[];

export type SM_PercentageOfRevenueResponse = {
  "G&A": string;
  "2019": number;
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
  "2025": number;
  "2026": number;
  "2027": number;
  "2028": number;
}[];

export type SM_AnnualGrowthRequestType = {
  sm_expenses: {
    "G&A": string;
    "2019": number;
    "2020": number;
    "2021": number;
    "2022": number;
    "2023": number;
    "2024": number;
    "2025": number;
    "2026": number;
    "2027": number;
    "2028": number;
  }[];
};
