import { useState } from 'react';
import { TypeMoviesCards } from '../../../mocks/type-mocks';
import MovieCard from '../../movie-card/movie-card';

type TypePropsListFavorite = {
  moviesFavorite: TypeMoviesCards;
}

export default function ListFavorite ({moviesFavorite}: TypePropsListFavorite): JSX.Element {
  const [movieIdPlaying, setState] = useState('');

  const handleMouseOverCapture = (value: string): void => {
    setState(value);
  };

  const handleMouseOutMovies = (): void => {
    setState('');
  };

  return (
    <div className="catalog__films-list">
      {moviesFavorite.map((movie) => <MovieCard key={`movie=${movie.id}`} movie={movie} onMouseOutCapture={handleMouseOutMovies} onMouseOverCapture={handleMouseOverCapture} movieIdPlaying={movieIdPlaying}/>)}
    </div>
  );
}
