import { store } from './store/index';

export type TypePromoMovie = {
  id: string;
  name: string;
  genre: string;
  data: number;
};

export type TypeState = ReturnType<typeof store.getState>;

export type TypeAppDispatch = typeof store.dispatch;
