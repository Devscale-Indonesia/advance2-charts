"use client";

import { ComposedChart, Area, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "@/dummy/data";

export const CompositeChartComponent = () => {
  return (
    <ResponsiveContainer height={600}>
      <ComposedChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="returned" stroke="black" fill="violet" opacity={1} />
        <Bar type="step" dataKey="sales" stroke="black" fill="red" opacity={0.4} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
