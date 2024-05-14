import { useState } from 'react';
import { useAppSelector } from '../../../../utils';
import MovieCard from '../../../movie-card/movie-card';
type TypePropsListMoreLikeThis = {
  genre: string;
}

export default function ComponentsListMoreLikeThis({ genre }: TypePropsListMoreLikeThis): JSX.Element {
  const movies = useAppSelector((store) => store.movies)
    .filter((movie) => movie.genre === genre)
    .slice(0, 4);

  const [movieIdPlaying, setState] = useState('');

  const handleMouseOverCapture = (value: string): void => {
    setState(value);
  };

  const handleMouseOutMovies = (): void => {
    setState('');
  };

  return (
    <div className="catalog__films-list">
      {movies.map((item) => <MovieCard key={item.id} movie={item} onMouseOverCapture={handleMouseOverCapture} onMouseOutCapture={handleMouseOutMovies} movieIdPlaying={movieIdPlaying} />)}
    </div>
  );
}

