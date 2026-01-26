import React from "react";
import { Link } from "react-router-dom";

interface ICountryPreviewProps {
  flag: string;
  name: string;
  region: string;
  code: string;
}

export default function CardPreview({ flag, name, region, code }: ICountryPreviewProps) {
  return (
    <Link to={`country/${code}`}>
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-101 hover:shadow-xl">
        <img src={flag} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{region}</p>
        </div>
      </div>
    </Link>
  );
}
