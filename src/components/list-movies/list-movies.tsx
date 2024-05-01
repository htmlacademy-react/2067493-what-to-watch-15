import MovieCard from '../movie-card/movie-card';
import { TypeMoviesCards } from '../../mocks/type-mocks';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

type TypePropsListMovies = {
  movies: TypeMoviesCards;
}


export default function ListMovies({ movies }: TypePropsListMovies): JSX.Element {
  const { pathname } = useLocation();
  const [movieIdPlaying, setState] = useState('');
  const handleMouseOverCapture = (value: string): void => {
    setState(value);
  };
  const handleMouseOutCapture = (): void => {
    setState('');
  };

  return (
    <div className="catalog__films-list">
      {movies.map((item) => <MovieCard key={item.id} movie={item} onMouseOverCapture={handleMouseOverCapture} onMouseOutCapture={handleMouseOutCapture} movieIdPlaying={movieIdPlaying} />)}
      {pathname !== '/' ?
        '' :
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>}

    </div>
  );
}
