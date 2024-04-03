export type AssumptionDataType = {
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

/**
 * {
    df_assumption: [
      {
        COMPONENT: "REVENUE",
        BASE: "YoY%",
        Select: true,
        "2018 ": 0.0085774955,
        "2019 ": 0.1528285899,
        "2020 ": 0.0043055571,
        "2021 ": -0.2673132039,
        "2022 ": -0.3396820326,
        "2023 ": 1.0386457991,
        "2024 ": 0.3213454464,
        "2025 ": 0.299196499,
        "2026 ": 0.06,
        "2027 ": 0.06,
      },
      {
        COMPONENT: "GP MARGIN ",
        BASE: "YoY%",
        Select: true,
        "2018 ": 0.3250056128,
        "2019 ": 0.3545930748,
        "2020 ": 0.3878352823,
        "2021 ": 0.4155195452,
        "2022 ": 0.4131066142,
        "2023 ": 0.35,
        "2024 ": 0.35,
        "2025 ": 0.35,
        "2026 ": 0.35,
        "2027 ": 0.35,
      },
      {
        COMPONENT: "GP MARGIN ",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.3250056128,
        "2019 ": 0.3545930748,
        "2020 ": 0.3878352823,
        "2021 ": 0.4155195452,
        "2022 ": 0.4131066142,
        "2023 ": 0.35,
        "2024 ": 0.35,
        "2025 ": 0.35,
        "2026 ": 0.35,
        "2027 ": 0.35,
      },
      {
        COMPONENT: "Selling and marketing expenses ",
        BASE: "YoY%",
        Select: true,
        "2018 ": 0.0299580696,
        "2019 ": 0.2874440503,
        "2020 ": -0.0261148336,
        "2021 ": 0.1486398137,
        "2022 ": -0.0842304629,
        "2023 ": 0.0701675207,
        "2024 ": 0.2345358799,
        "2025 ": 0.2498973331,
        "2026 ": 0.0407962094,
        "2027 ": 0.040458396,
      },
      {
        COMPONENT: "Selling and marketing expenses ",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.238746579,
        "2019 ": 0.2666249479,
        "2020 ": 0.2585488848,
        "2021 ": 0.4053294592,
        "2022 ": 0.5621358035,
        "2023 ": 0.2950877879,
        "2024 ": 0.2757011521,
        "2025 ": 0.2652394268,
        "2026 ": 0.2604341415,
        "2027 ": 0.2556329143,
      },
      {
        COMPONENT: "Salaries and related costs",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.2057695967,
        "2019 ": 0.2148122985,
        "2020 ": 0.2264856171,
        "2021 ": 0.3523589074,
        "2022 ": 0.4721554321,
        "2023 ": 0.2521164345,
        "2024 ": 0.235,
        "2025 ": 0.23,
        "2026 ": 0.225,
        "2027 ": 0.22,
      },
      {
        COMPONENT: "Repairs and maintenance",
        BASE: "YoY%",
        Select: true,
        "2018 ": -0.0395270585,
        "2019 ": 0.1767356893,
        "2020 ": -0.2468648858,
        "2021 ": 0.4494676341,
        "2022 ": -0.031895435,
        "2023 ": 0.113325655,
        "2024 ": 0.07,
        "2025 ": 0.07,
        "2026 ": 0.07,
        "2027 ": 0.07,
      },
      {
        COMPONENT: "Rent expenses",
        BASE: "YoY%",
        Select: true,
        "2018 ": -0.6464941581,
        "2019 ": 0.5728929201,
        "2020 ": 0.4018861982,
        "2021 ": -0.0270299891,
        "2022 ": 0.1277681408,
        "2023 ": 0.0413399786,
        "2024 ": 0.078,
        "2025 ": 0.078,
        "2026 ": 0.078,
        "2027 ": 0.078,
      },
      {
        COMPONENT: "Travel and communication",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.0075038111,
        "2019 ": 0.0080001562,
        "2020 ": 0.0060296092,
        "2021 ": 0.0126288484,
        "2022 ": 0.0226863301,
        "2023 ": 0.0049860419,
        "2024 ": 0.01,
        "2025 ": 0.01,
        "2026 ": 0.01,
        "2027 ": 0.01,
      },
      {
        COMPONENT: "Selling and promotion",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.0003696013,
        "2019 ": 0.0095860787,
        "2020 ": 0.0007272132,
        "2021 ": 0.0,
        "2022 ": 0.0,
        "2023 ": 0.0,
        "2024 ": 0.0,
        "2025 ": 0.0,
        "2026 ": 0.0,
        "2027 ": 0.0,
      },
      {
        COMPONENT: "Stationary",
        BASE: "YoY%",
        Select: true,
        "2018 ": 0.3869026549,
        "2019 ": -0.1773226136,
        "2020 ": -0.3255448693,
        "2021 ": -0.3519822902,
        "2022 ": 1.0246672582,
        "2023 ": -0.3421567768,
        "2024 ": 0.036,
        "2025 ": 0.036,
        "2026 ": 0.036,
        "2027 ": 0.036,
      },
      {
        COMPONENT: "Others",
        BASE: "YoY%",
        Select: true,
        "2018 ": -0.0133034112,
        "2019 ": 2.3202305988,
        "2020 ": -0.7186481389,
        "2021 ": -0.0479311014,
        "2022 ": 0.5921321649,
        "2023 ": 0.6377795395,
        "2024 ": 0.05,
        "2025 ": 0.05,
        "2026 ": 0.05,
        "2027 ": 0.05,
      },
      {
        COMPONENT: "General and administrative expenses ",
        BASE: "YoY%",
        Select: true,
        "2018 ": 0.0,
        "2019 ": 0.0513429837,
        "2020 ": -0.0319401253,
        "2021 ": 0.0578248522,
        "2022 ": 0.1285009842,
        "2023 ": 0.03,
        "2024 ": 0.03,
        "2025 ": 0.03,
        "2026 ": 0.03,
        "2027 ": 0.03,
      },
      {
        COMPONENT: "General and administrative expenses ",
        BASE: "Sales%",
        Select: true,
        "2018 ": 0.0,
        "2019 ": -0.0432260146,
        "2020 ": -0.0416659751,
        "2021 ": -0.060155723,
        "2022 ": -0.1028077319,
        "2023 ": 0.0,
        "2024 ": 0.0,
        "2025 ": 0.0,
        "2026 ": 0.0,
        "2027 ": 0.0,
      },
    ],
  }
 */
