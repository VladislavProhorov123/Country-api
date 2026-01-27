import React from "react";
import type { IStatItem } from "../data/statisticData";

interface IStatCardProps {
  stat: IStatItem;
}

export default function StatCard({ stat }: IStatCardProps) {
  return (
    <div className="rounded-2xl p-6 bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer ">
      <p className="text-sm ">{stat.title}</p>
      <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
      <p className="mt-2 text-sm ">{stat.description}</p>
    </div>
  );
}
