import { store } from './store/index';

export type TypePromoMovie = {
  id: string;
  name: string;
  genre: string;
  data: number;
};

export type TypeMovieCard = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre:string;
};

export type TypeMoviePage = {
  id: string;
  name:string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type TypeComment = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type TypeReview = {
  movieId: string;
  comments: TypeComment[];
}

export type TypeReviews = TypeReview[]
export type TypeMoviesCards = TypeMovieCard[];

export type TypeMoviesPage = TypeMoviePage[];

export type TypeState = ReturnType<typeof store.getState>;

export type TypeAppDispatch = typeof store.dispatch;
