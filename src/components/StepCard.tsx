import React from "react";

interface IStepCardProps {
  step: number;
  text: string;
  subtext: string;
  icon?: React.ReactNode;
}

export default function StepCard({
  step,
  text,
  subtext,
  icon,
}: IStepCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md relative">
      <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white text-xl">
        {icon ? icon : step}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{text}</h3>
      <p className="text-sm text-gray-600">{subtext}</p>
    </div>
  );
}
