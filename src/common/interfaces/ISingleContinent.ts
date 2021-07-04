import { IContinents } from './IContinents';

export interface ISingleContinent {
  name: string;
  emoji: string;
  languages: ILanguage[];
  continent: IContinents;
}

export interface ILanguage {
  name: string;
}

export interface ISingleContinentData {
  countries: ISingleContinent[];
}
