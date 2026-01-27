import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { populationByRegion } from "../data/statisticData";

export default function PopulationChart() {
  return (
    <div className=" rounded-2xl border border-white/10 bg-white/5 p-6 ">
      <p className="mb-4 text-lg font-medium">Population By Region</p>
      <div className="focus:outline-none h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="focus:outline-none"
        >
          <BarChart data={populationByRegion} responsive>
            <XAxis dataKey="region" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="population" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
