export type EmployeeData = {
  id: number;
  firstname: string;
  lastname: string;
  patronymic: string;
  email: string;
  quote: string;
  region_id: number;
  avatar: string;
  user: number;
};

export type EmployeeTeamData = {
  count: number;
  data: EmployeeData[];
};

export type EmployeeTeam = {
  [key: string]: EmployeeTeamData;
};
