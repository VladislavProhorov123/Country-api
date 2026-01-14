import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ICountry } from "../types/Country";


export default function Home() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=cca3,name,flags,region,population,capital")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p className="p-10">Loading...</p>;
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Countries</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.cca3}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold">{country.name.common}</h2>
              <p className="text-sm text-gray-500">{country.region}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
