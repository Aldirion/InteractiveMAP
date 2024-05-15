export type Region = {
  id: number;
  district: 15;
  title: string;
  codegibdd: string;
  codegost: string;
  rrc_address: null | string;
  rrc_email: null | string;
  population: number;
  count_school: number;
  count_spo: number;
  comp_count_spo: number;
  comp_count_school: number;
  comp_indicator_count_eduinst: number;
  school: SchoolRegion;
  spo: SPORegion;
};

export type SchoolRegion = {
  total_kdn: number;
  total_museum: number;
  total_mediacentre: number;
  total_theatre: number;
  total_tour_club: number;
  total_cinema_club: number;
  total_mpc: number;
  total_yunarmy_participants: number;
  total_classes_are_eagles: number;
  total_ssc: number;
  total_volunteers_squad: number;
  total_leaders_squad: number;
  total_uid: number;
  total_y_rescuers_squad: number;
  total_cdi: boolean;
  total_ssgo: boolean;
  total_leaders_league: boolean;
};

export type Eduinstitutions = {
  id: number;
  sign: string;
  type: string;
  title: string;
  inn: string;
  kpp: string;
  contingent: number;
  address: string;
  eduenv: SchoolEduenv | SPOEduenv;
};

export type SchoolEduenv = {
  cdi: boolean;
  kdn: number;
  mpc: number;
  ssc: number;
  uid: number;
  rddm: string;
  ssgo: boolean;
  museum: number;
  theatre: number;
  tour_club: number;
  cinema_club: number;
  mediacentre: number;
  leaders_squad: number;
  volunteers_squad: number;
  y_rescuers_squad: number;
  classes_are_eagles: number;
  yunarmy_participants: number;
};

export type SPOEduenv = {
  ccr: number;
  cyi: boolean;
  kdn: number;
  mpc: number;
  ssc: number;
  rddm: string;
  ssgo: boolean;
  museum: number;
  theatre: number;
  tour_club: number;
  cinema_club: number;
  mediacentre: number;
  leaders_squad: number;
  volunteers_squad: number;
};

export type SPORegion = {
  total_kdn: number;
  total_museum: number;
  total_mediacentre: number;
  total_theatre: number;
  total_tour_club: number;
  total_cinema_club: number;
  total_mpc: number;
  total_ssc: number;
  total_volunteers_squad: number;
  total_leaders_squad: number;
  total_ccr: number;
  total_cyi: boolean;
  total_ssgo: boolean;
  total_leaders_league: boolean;
};

export type Municipalities = {
  id: number;
  title: string;
  region: number;
  oktmo5: string;
  codegost: string;
  count_school: null;
  count_spo: null;
  comp_count_school: number;
  comp_count_spo: number;
  comp_indicator_count_eduinst: number;
  school: SchoolRegion;
  spo: SPORegion;
};

export type DataSchool = {
  id: number;
  sign: string;
  title: string;
  contingent: null | number;
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
