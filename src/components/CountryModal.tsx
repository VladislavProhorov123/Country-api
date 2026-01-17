import { BadgeInfoIcon, Heart } from "lucide-react";
import type { ICountry } from "../types/Country";
import { Link } from "react-router-dom";

interface Props {
  country: ICountry;
  onClose: () => void;
}

export default function CountryModal({ country, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[400px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
          <div className="flex items-center gap-x-3 ">
            <button className="cursor-pointer"><Heart fill="red" stroke="none" /></button>
            <Link to={`/country/${country.cca3}`}
            className="cursor-pointer"><BadgeInfoIcon /></Link>
          </div>
        </div>

        <p>
          <b>Регіон:</b> {country.region}
        </p>
        <p>
          <b>Населення:</b> {country.population.toLocaleString()}
        </p>
        {country.capital && (
          <p>
            <b>Столиця:</b> {country.capital[0]}
          </p>
        )}
      </div>
    </div>
  );
}
