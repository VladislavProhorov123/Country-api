import { create, type StateCreator } from "zustand";
import type { ICountry } from "../types/Country";
import { devtools, persist } from "zustand/middleware";

interface ICountriesState {
  countries: ICountry[];
  search: string;
  region: string | null;
  favorites: string[];
}

interface ICountriesActions {
  setCountries: (countries: ICountry[]) => void;
  setSearch: (value: string) => void;
  setRegion: (region: string) => void;
  toggleFavorite: (code: string) => void;
}

interface ICountriesStore extends ICountriesState, ICountriesActions {}

const initialState: ICountriesState = {
  countries: [],
  search: "",
  region: null,
  favorites: [],
};

const countriesStore: StateCreator<
  ICountriesStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set, get) => ({
  ...initialState,

  setCountries: (countries) => set({ countries }, false, "setCountries"),

  setSearch: (value) => set({ search: value }, false, "setSearch"),

  setRegion: (region) => set({ region }, false, "setRegion"),

  toggleFavorite: (code) =>
    set(
      (state) => {
        const exists = state.favorites.includes(code);

        return {
          favorites: exists
            ? state.favorites.filter((c) => c !== code)
            : [...state.favorites, code],
        };
      },
      false,
      "toggleFavorite",
    ),
});

export const useCountriesStore = create<ICountriesStore>()(
  devtools(
    persist(countriesStore, {
      name: "countries-storage",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }),
  ),
);

export const useCountries = () => useCountriesStore((s) => s.countries);

export const useSearch = () => useCountriesStore((s) => s.search);

export const useRegion = () => useCountriesStore((s) => s.region);

export const useFavorites = () => useCountriesStore((s) => s.favorites);

export const useFilteredCountries = () =>
  useCountriesStore((state) => {
    return state.countries.filter((c) => {
      const matchSearch = c.name
        .toLowerCase()
        .includes(state.search.toLowerCase());

      const matchRegion = state.region ? c.region === state.region : true;

      return matchSearch && matchRegion;
    });
  });
