export interface ICountry {
  cca3: string;
  name: {
    common: string;
    offical: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];
}
