import React from "react";

export interface IInfoRowProps {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
}

export default function InfoRow({ icon: Icon, label, value }: IInfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-gray-500 mt-1" />

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
