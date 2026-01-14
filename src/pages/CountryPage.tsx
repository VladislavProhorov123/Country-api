import React from "react";
import { useParams } from "react-router-dom";

export default function CountryPage() {
  const {code} = useParams()
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Country: {code}</h1>
    </div>
  );
}
