import MovieCard from '../movie-card/movie-card';
import { useState } from 'react';
import ShowMoreButtonComponent from './show-more-button-component';
import { useAppDispatch, useAppSelector } from '../../utils';
import { CHANGE_RENDER_MOVIES_COUNT } from '../../store/actions/action';


export default function ListMovies(): JSX.Element {
  const movies = useAppSelector((store) => store.moviesGenre);
  const moviesCount = movies.length;
  const moviesRenderCount = useAppSelector((store) => store.moviesRenderCount);
  const dispatch = useAppDispatch();
  const [movieIdPlaying, setState] = useState('');
  const handleMouseOverCapture = (value: string): void => {
    setState(value);
  };
  const handleClickMovies = (): void => {
    setState('');
  };

  const handleClickShowMoreButton = () => {
    dispatch(CHANGE_RENDER_MOVIES_COUNT());
  };

  return (
    <div className="catalog__films-list">
      {movies.slice(0, moviesRenderCount).map((item) => <MovieCard key={item.id} movie={item} onMouseOverCapture={handleMouseOverCapture} onMouseOutCapture={handleClickMovies} movieIdPlaying={movieIdPlaying} />)}
      <ShowMoreButtonComponent moviesCount={moviesCount} renderMoviesCount={moviesRenderCount} onClick={handleClickShowMoreButton} />
    </div>
  );
}
