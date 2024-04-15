export type Region = {
  regionid: number;
  title: string;
  codegibdd: string;
  codegost: string;
  capital: string;
  population: number;
  regionheadid: null | string;
  rcid: null;
  indicator: null;
  countschool: number | null;
  countspo: number | null;
  dsid: number;
};

export interface RegionCardData {
  title: string;
  value: number;
  description: string;
}

export enum Section {
  SCHOOL = 'SCHOOL',
  SPO = 'SPO',
}
