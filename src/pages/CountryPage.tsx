import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { ICountry } from "../types/Country";

export default function CountryPage() {
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(true);
  const [neighbors, setNeighbors] = useState<ICountry[]>([]);

  useEffect(() => {
    if (!code) return;

    fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,flags,coatOfArms,region,subregion,population,capital,languages,currencies,timezones,borders,area,latlng,tld`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);

        // Если есть соседние страны, подгружаем их
        if (data.borders && data.borders.length) {
          fetch(
            `https://restcountries.com/v3.1/alpha?codes=${data.borders.join(
              ","
            )}&fields=cca3,name,flags`
          )
            .then((res) => res.json())
            .then(setNeighbors)
            .catch(console.error);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [code]);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!country) return <p className="p-10">Country not found</p>;

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-10">
      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full rounded-xl shadow-lg"
        />
        {country.coatOfArms?.svg && (
          <img
            src={country.coatOfArms.svg}
            alt="Coat of Arms"
            className="w-24 h-24 absolute top-5 right-5"
          />
        )}
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
            {country.capital && (
              <p>
                <b>Capital:</b> {country.capital.join(", ")}
              </p>
            )}
            {country.tld && (
              <p>
                <b>Top-level domain:</b> {country.tld.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* POPULATION & AREA */}
      <div className="grid md:grid-cols-2 gap-6">
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Area:</b> {country.area.toLocaleString()} km²
        </p>
        <p>
          <b>Population density:</b>{" "}
          {(country.population / country.area).toFixed(1)} per km²
        </p>
        <p>
          <b>Coordinates:</b> {country.latlng.join(", ")}
        </p>
      </div>

      {/* CURRENCIES & LANGUAGES */}
      <div className="grid md:grid-cols-2 gap-6">
        {country.currencies && (
          <p>
            <b>Currency:</b>{" "}
            {Object.values(country.currencies)
              .map((c) => `${c.name} (${c.symbol})`)
              .join(", ")}
          </p>
        )}
        {country.languages && (
          <p>
            <b>Languages:</b> {Object.values(country.languages).join(", ")}
          </p>
        )}
        <p>
          <b>Timezones:</b> {country.timezones.join(", ")}
        </p>
      </div>

      {/* NEIGHBORS */}
      {neighbors.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Neighboring Countries</h2>
          <div className="flex gap-4 flex-wrap">
            {neighbors.map((n) => (
              <Link
                key={n.cca3}
                to={`/country/${n.cca3}`}
                className="flex flex-col items-center w-24"
              >
                <img
                  src={n.flags.png}
                  alt={n.name.common}
                  className="w-full h-12 object-cover rounded"
                />
                <span className="text-sm text-center">{n.name.common}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
