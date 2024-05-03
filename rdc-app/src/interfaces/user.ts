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
  quote: string;
  phone_number: string;
  telegram_username: string;
  avatar: string;
  region: {
    id: number;
    title: string;
  };
  user: {
    id: number;
    username: string;
  };
};
