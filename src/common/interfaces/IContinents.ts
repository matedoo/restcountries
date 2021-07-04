export interface IContinents {
  code: number;
  name: string;
  countries: string[];
}

export interface IContinentsData {
  continents: IContinents[];
}
