import type { ICountry } from "../types/Country";

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
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">
          {country.name.common}
        </h2>

        <p><b>Регіон:</b> {country.region}</p>
        <p><b>Населення:</b> {country.population.toLocaleString()}</p>
        {country.capital && <p><b>Столиця:</b> {country.capital[0]}</p>}
      </div>
    </div>
  );
}
