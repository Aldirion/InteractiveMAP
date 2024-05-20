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

export type EmployeeFederalTeam = {
  [key: string]: EmployeeFederalTeamData;
};

export type EmployeeFederalTeamData = {
  count: number;
  employees: EmployeeFederalData[];
  departments: EmpoloyeeDepartments | {};
};

export type EmployeeFederalData = {
  id: number;
  firstname: string;
  lastname: string;
  patronymic: string;
  email: string;
  quote: string | null;
  region_id: number;
  avatar: string;
  user: number;
  post_title: string;
  post_sd_par_t: string;
};

export type EmpoloyeeDepartments = {
  [key: string]: {
    count: number;
    data: EmployeeFederalData[];
  };
};
