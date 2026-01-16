import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICountry } from "../types/Country";

export default function CountryPage() {
  const { code } = useParams();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code) return;

    // Fetch with fields
    fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,flags,region,subregion,population,capital`
    )
      .then((res) => res.json())
      .then((data) => {
        // API возвращает объект для одного кода
        setCountry(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [code]);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!country) return <p className="p-10">Country not found</p>;

  return (
    <div className="p-10 grid md:grid-cols-2 gap-12">
      {/* Flag */}
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full rounded-xl shadow-lg"
      />

      {/* Info */}
      <div>
        <h1 className="text-4xl font-bold mb-6">{country.name.common}</h1>

        <div className="space-y-3 text-lg">
          <p>
            <b>Official name:</b> {country.name.official}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          {country.subregion && (
            <p>
              <b>Subregion:</b> {country.subregion}
            </p>
          )}
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          {country.capital && (
            <p>
              <b>Capital:</b> {country.capital.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
