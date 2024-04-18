export type Region = {
  id: number;
  regionid: number;
  title: string;
  codegibdd: string;
  codegost: string;
  capital: string;
  population: number;
  regionheadid: null | string;
  rcid: null;
  indicator: null;
  count_school: number | null;
  count_spo: number | null;
  dsid: number;
};

export type EmployeeData = {
  id: number;
  firstname: string;
  lastname: string;
  patronymic: string;
  email: string;
  quote: string;
  region_id: number;
};

export type EmployeeTeamData = {
  count: number;
  data: EmployeeData[];
};

export type EmployeeTeam = {
  [key: string]: EmployeeTeamData;
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
