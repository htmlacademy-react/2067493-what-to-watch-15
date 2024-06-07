import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TypeAppDispatch, TypeState, TypeMoviesCards } from './type';
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const SECOND_PER_MINUTE = 60;
const MILISECOND_PER_SECOND = 1000;

export const getDateFormate = (date: string, dateFormate: string) => dayjs(date).format(dateFormate);
export const durationMovies = (minute: number, format: string) => dayjs.duration(SECOND_PER_MINUTE * minute * MILISECOND_PER_SECOND).format(format);

export const getGenres = (movie: TypeMoviesCards): string[] => {
  const movieGenres = Array.from(new Set(movie.map((movieCard) => movieCard.genre)));
  movieGenres.unshift('All genres');
  return movieGenres;
};

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;

