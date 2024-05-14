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
  total_kdn: number | null;
  total_museum: number | null;
  total_mediacentre: number | null;
  total_theatre: number | null;
  total_tour_club: number | null;
  total_cinema_club: number | null;
  total_mpc: number | null;
  total_yunarmy_participants: number | null;
  total_classes_are_eagles: number | null;
  total_ssc: number | null;
  total_volunteers_squad: number | null;
  total_leaders_squad: number | null;
  total_uid: number | null;
  total_y_rescuers_squad: number | null;
  total_cdi: number | null;
  total_ssgo: number | null;
  total_leaders_league: number | null;
};

export type SPORegion = {
  total_kdn: number | null;
  total_museum: number | null;
  total_mediacentre: number | null;
  total_theatre: number | null;
  total_tour_club: number | null;
  total_cinema_club: number | null;
  total_mpc: number | null;
  total_ssc: number | null;
  total_volunteers_squad: number | null;
  total_leaders_squad: number | null;
  total_ccr: number | null;
  total_cyi: number | null;
  total_ssgo: number | null;
  total_leaders_league: number | null;
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
