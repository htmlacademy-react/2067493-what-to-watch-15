import { TypeMovieCard, TypeMoviesCards, TypeMoviePage, TypeMoviesPage } from './type-mocks';
import { ACTORS, NAME_MOVIES, GENRE, VIDEOS, IMAGES, DESCRIPTION } from './const-mocks';
import { getRandomInteger, getRandomArrayElement, getRandomSliceArray } from './utils-mocks';

export const moviesPage: TypeMoviesPage = Array.from({length:8}, (_, index): TypeMoviePage => ({
  id: String(index + 1),
  name: getRandomArrayElement(NAME_MOVIES),
  posterImage: getRandomArrayElement(IMAGES),
  backgroundImage: getRandomArrayElement(IMAGES),
  backgroundColor: '#ffffff',
  videoLink: getRandomArrayElement(VIDEOS),
  description: getRandomArrayElement(DESCRIPTION),
  rating: Number(getRandomInteger(5, 9.5).toFixed(1)),
  scoresCount: getRandomInteger(10, 250),
  director: getRandomArrayElement(ACTORS),
  starring: getRandomSliceArray(ACTORS),
  runTime: getRandomInteger(70, 250),
  genre: getRandomArrayElement(GENRE),
  released: Number(getRandomInteger(1980, 2020).toFixed(0)),
  isFavorite: !!getRandomInteger(0,1)
}));

export const moviesCards: TypeMoviesCards = moviesPage.map((movie): TypeMovieCard => ({
  id: movie.id,
  name: movie.name,
  previewImage: movie.posterImage,
  previewVideoLink: movie.videoLink,
  genre: movie.genre
}));

export const moviesFavorite: TypeMoviesCards = moviesPage.filter((item) => item.isFavorite).map((movie): TypeMovieCard => ({
  id: movie.id,
  name: movie.name,
  previewImage: movie.posterImage,
  previewVideoLink: movie.videoLink,
  genre: movie.genre
}));

export const promoMovie: TypeMoviePage = {
  id: '0',
  name: getRandomArrayElement(NAME_MOVIES),
  posterImage: getRandomArrayElement(IMAGES),
  backgroundImage: getRandomArrayElement(IMAGES),
  backgroundColor: '#ffffff',
  videoLink: getRandomArrayElement(VIDEOS),
  description: getRandomArrayElement(DESCRIPTION),
  rating: Number(getRandomInteger(5, 9.5).toFixed(1)),
  scoresCount: getRandomInteger(10, 250),
  director: getRandomArrayElement(ACTORS),
  starring: getRandomSliceArray(ACTORS),
  runTime: getRandomInteger(70, 250),
  genre: getRandomArrayElement(GENRE),
  released: Number(getRandomInteger(1980, 2020).toFixed(0)),
  isFavorite: !!getRandomInteger(0,1)
};
