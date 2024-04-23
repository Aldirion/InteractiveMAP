export type Region = {
  id: number;
  regionid: number;
  district: 15;
  title: string;
  codegibdd: string;
  codegost: string;
  population: number;
  count_school: number;
  count_spo: number;
  comp_count_spo: number;
  comp_count_school: number;
  comp_indicator_count_eduinst: number;
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
