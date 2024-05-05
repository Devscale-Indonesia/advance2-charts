"use client";

import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import { data } from "@/dummy/data";

export const LineChartComponent = () => {
  return (
    <LineChart width={800} height={600} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <Tooltip />
      <Line dataKey="returned" stroke="black" fill="violet" opacity={1} />
      <Line dataKey="sales" stroke="black" fill="red" opacity={0.4} />
    </LineChart>
  );
};
