import { BadgeInfoIcon, Heart, Landmark, MapPin, Users } from "lucide-react";
import type { ICountry } from "../types/Country";
import { Link } from "react-router-dom";

interface Props {
  country: ICountry;
  onClose: () => void;
}

export default function CountryModal({ country, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[420px] overflow-hidden shadow-2xl relative animate-fadeIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
        >
          ✕
        </button>

        {/* Flag */}
        <div className="relative">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full h-44 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title + actions */}
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold leading-tight">
              {country.name.common}
            </h2>

            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-red-100 transition">
                <Heart className="w-5 h-5 text-red-500" />
              </button>

              <Link
                to={`/country/${country.cca3}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <BadgeInfoIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Info rows */}
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>
                <b>Region:</b> {country.region}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-gray-500" />
              <span>
                <b>Population:</b> {country.population.toLocaleString()}
              </span>
            </div>

            {country.capital && (
              <div className="flex items-center gap-3">
                <Landmark className="w-4 h-4 text-gray-500" />
                <span>
                  <b>Capital:</b> {country.capital[0]}
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <Link
            to={`/country/${country.cca3}`}
            className="block text-center mt-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            View full information
          </Link>
        </div>
      </div>
    </div>
  );
}
