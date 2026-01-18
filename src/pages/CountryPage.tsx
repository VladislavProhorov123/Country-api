import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { ICountry } from "../types/Country";
import {
  ArrowLeft,
  Globe,
  MapPin,
  Users,
  Landmark,
  Languages,
  Coins,
  Clock,
  Ruler,
  Hash,
} from "lucide-react";
import CountryMap from "../components/CountryMap";
import InfoRow from "../components/InfoRow";

export default function CountryPage() {
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(true);
  const [neighbors, setNeighbors] = useState<ICountry[]>([]);

  useEffect(() => {
    if (!code) return;

    fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,flags,coatOfArms,region,subregion,population,capital,languages,currencies,timezones,borders,area,latlng,tld`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);

        if (data.borders && data.borders.length) {
          fetch(
            `https://restcountries.com/v3.1/alpha?codes=${data.borders.join(
              ",",
            )}&fields=cca3,name,flags`,
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
    <div className="p-10 max-w-6xl mx-auto space-y-10 relative">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoRow
              icon={Landmark}
              label="Official name"
              value={country.name.official}
            />
            <InfoRow icon={Globe} label="Region" value={country.region} />
            {country.subregion && (
              <InfoRow
                icon={Globe}
                label="Subregion"
                value={country.subregion}
              />
            )}
            {country.capital && (
              <InfoRow
                icon={MapPin}
                label="Capital"
                value={country.capital.join(", ")}
              />
            )}

            {country.tld && (
              <InfoRow
                icon={Hash}
                label="Top-level domain"
                value={country.tld.join(", ")}
              />
            )}
          </div>
        </div>
      </div>

      {/* POPULATION & AREA */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoRow
          icon={Users}
          label="Population"
          value={country.population.toLocaleString()}
        />

        <InfoRow
          icon={Ruler}
          label="Area"
          value={`${country.area.toLocaleString()} km²`}
        />

        <InfoRow
          icon={Users}
          label="Population density"
          value={`${(country.population / country.area).toFixed(1)} per km²`}
        />

        <InfoRow
          icon={MapPin}
          label="Coordinates"
          value={country.latlng.join(", ")}
        />
      </div>

      {/* CURRENCIES & LANGUAGES */}
      <div className="grid md:grid-cols-2 gap-6">
        {country.currencies && (
          <InfoRow
            icon={Coins}
            label="Currency"
            value={Object.values(country.currencies)
              .map((c) => `${c.name} (${c.symbol})`)
              .join(", ")}
          />
        )}

        {country.languages && (
          <InfoRow
            icon={Languages}
            label="Languages"
            value={Object.values(country.languages).join(", ")}
          />
        )}

        <InfoRow
          icon={Clock}
          label="Timezones"
          value={country.timezones.join(", ")}
        />
      </div>

      {/* NEIGHBORS */}
      <div className="flex gap-4 flex-wrap">
        {neighbors.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Neighboring Countries
            </h2>

            <div className="flex gap-4 flex-wrap">
              {neighbors.map((n) => (
                <Link
                  key={n.cca3}
                  to={`/country/${n.cca3}`}
                  className="flex flex-col items-center w-28 p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <img
                    src={n.flags.png}
                    alt={n.name.common}
                    className="w-full h-16 object-cover rounded"
                  />
                  <span className="text-sm text-center mt-2 font-medium">
                    {n.name.common}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Location on map</h2>

        <CountryMap latlng={country.latlng} name={country.name.common} />
      </section>

      <Link to={"/"} className="absolute top-12 left-[-160px]">
        <ArrowLeft />
      </Link>
    </div>
  );
}
