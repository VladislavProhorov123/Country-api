export interface ICountry {
  cca3: string;

  name: {
    common: string;
    official: string;
  };

  flags: {
    svg: string;
    png: string;
  };

  region: string;
  subregion?: string;
  population: number;
  capital?: string[];

  area?: number;

  languages?: {
    [key: string]: string;
  };

  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };

  borders?: string[];
  timezones?: string[];

  independent?: boolean;
  unMember?: boolean;
}
