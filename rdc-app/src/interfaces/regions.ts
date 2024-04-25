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

export type DataSchool = {
  id: number;
  sign: string;
  title: string;
  contingent: null;
  address: string;
};

export type SchoolsData = {
  count: number;
  schools: DataSchool[];
};

export type SPOData = {
  count: number;
  spo: DataSchool[];
};

export type RegionSPOData = {
  [key: string]: SPOData;
};

export type RegionSchoolsData = {
  [key: string]: SchoolsData;
};

export type RegionSchool = {
  count_schools: number;
  data: RegionSchoolsData;
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
