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

export type TypeMoviesCards = TypeMovieCard[];

export type TypeMoviesPage = TypeMoviePage[];
