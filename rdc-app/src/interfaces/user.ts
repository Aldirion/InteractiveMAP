export type UserData = {
  id: number;
  firstname: string;
  lastname: string;
  patronymic: string;
  post_title: string;
  post_subdivision: string;
  tab_number: string;
  email: string;
  bio: null | string;
  quote: string | null;
  phone_number: string;
  telegram_username: string;
  avatar: string;
  region: {
    id: number;
    title: string;
  };
  posts: UserPost[];
  eduinstitutions: Edunstitutions[];
  user: {
    id: number;
    username: string;
  };
};

export type UserPost = {
  post_title: string;
  subdivision_title: string;
  tab_number: string;
};

export type Edunstitutions = {
  edu_inst_title: string;
};
