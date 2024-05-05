"use client";

import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import { data } from "@/dummy/data";

export const AreaChartComponent = () => {
  return (
    <AreaChart width={800} height={600} data={data}>
      <XAxis dataKey="name" />
      <Tooltip />
      <Area type="monotone" dataKey="returned" stroke="black" fill="violet" opacity={1} />
      <Area type="step" dataKey="sales" stroke="black" fill="red" opacity={0.4} />
    </AreaChart>
  );
};
