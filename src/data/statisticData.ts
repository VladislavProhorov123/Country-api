export interface IStatItem {
  id: number;
  title: string;
  value: string;
  description: string;
}

export const stats: IStatItem[] = [
  {
    id: 1,
    title: "Total Countries",
    value: "250+",
    description: "Recognized territories worldwide",
  },
  {
    id: 2,
    title: "World Population",
    value: "8.1B",
    description: "People currently living on Earth",
  },
  {
    id: 3,
    title: "Total Land Area",
    value: "149M km²",
    description: "Land surface of the planet",
  },
  {
    id: 4,
    title: "Avg. Density",
    value: "55/km²",
    description: "Average population density",
  },
  {
    id: 5,
    title: "Global GDP",
    value: "$105T",
    description: "Approximate world GDP",
  },
  {
    id: 6,
    title: "Annual Growth",
    value: "0.9%",
    description: "Population growth per year",
  },
];

export const populationByRegion = [
  { region: 'Asia', population: 4700 },
  { region: 'Africa', population: 1400 },
  { region: 'Europe', population: 750 },
  { region: 'Americas', population: 1000 },
  { region: 'Oceania', population: 45 },
]

