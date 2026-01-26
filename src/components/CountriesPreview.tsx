import React, { useEffect, useState } from "react";
import Title from "./Title";
import type { ICountry } from "../types/Country";
import CardPreview from "./CardPreview";


export default function CountriesPreview() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=cca3,name,flags,region")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          text="Explore Countries"
          subtitle="Browse through countries from all over the world. Hover a card to see it pop!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.slice(0, 6).map((c) => (
            <CardPreview
              key={c.cca3}
              flag={c.flags.png}
              name={c.name.common}
              region={c.region}
              code={c.cca3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
