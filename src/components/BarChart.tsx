"use client";

import { BarChart, Bar, XAxis, Tooltip, CartesianGrid } from "recharts";
import { data } from "@/dummy/data";

export const BarChartComponent = () => {
  return (
    <BarChart width={800} height={600} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <Tooltip />
      <Bar dataKey="returned" stroke="black" fill="violet" opacity={1} />
      <Bar dataKey="sales" stroke="black" fill="red" opacity={0.4} />
    </BarChart>
  );
};
