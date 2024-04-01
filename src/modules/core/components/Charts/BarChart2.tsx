import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[
        { data: [4, 3, 5], color: "#fdb462" },
        { data: [1, 6, 3] },
        { data: [2, 5, 6] },
      ]}
      width={400}
      height={200}
    />
  );
}
