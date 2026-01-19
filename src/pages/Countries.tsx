import { useEffect, useState } from "react";
import CountryModal from "../components/CountryModal";
import type { ICountry } from "../types/Country";

export default function Home() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=cca3,name,flags,region,population,capital",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="px-4 py-6 sm:p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Countries</h1>

      <div
        className="grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          sm:gap-6
"
      >
        {countries.map((country) => (
          <div
            key={country.cca3}
            onClick={() => setSelectedCountry(country)}
            className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
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
          </div>
        ))}
      </div>

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}
