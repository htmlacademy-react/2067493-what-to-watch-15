import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TypeMoviesCards } from './type-mocks';
dayjs.extend(duration);

const SECOND_PER_MINUTE = 60;
const MILISECOND_PER_SECOND = 1000;

export const getRandomInteger = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = <T>(elements: T[]): T => elements[getRandomInteger(0, elements.length - 1)];

export const getRandomSliceArray = <T>(elements: T[]): T[] => elements.slice(getRandomInteger(0, elements.length / 2), getRandomInteger(elements.length / 2, elements.length));


export const getDateFormate = (date: string, dateFormate: string) => dayjs(date).format(dateFormate);
export const durationMovies = (minute: number, format: string) => dayjs.duration(SECOND_PER_MINUTE * minute * MILISECOND_PER_SECOND).format(format);

export const getRandomDate = () => dayjs().subtract(getRandomInteger(0, 14), 'year')
  .subtract(getRandomInteger(0, 5), 'month')
  .subtract(getRandomInteger(0, 30), 'day')
  .startOf('date')
  .toString();

export const getGenres = (movie: TypeMoviesCards): string[] => {
  const movieGenres = Array.from(new Set(movie.map((movieCard) => movieCard.genre)));
  movieGenres.unshift('All genres');
  return movieGenres;
};
