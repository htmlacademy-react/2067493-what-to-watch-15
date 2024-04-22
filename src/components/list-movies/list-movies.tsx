import MovieCard from '../movie-card/movie-card';
import { TypeMoviesCards, TypeMovieCard} from '../../mocks/type-mocks';
import { useState } from 'react';


type TypePropsListMovies = {
  movies: TypeMoviesCards;
}


export default function ListMovies({ movies }: TypePropsListMovies): JSX.Element {
  const [state, setState] = useState({});
  const handleMouseOverCapture = (value: TypeMovieCard): void => {
    setState({
      ...value
    });
  };
  const handleMouseOutCapture = (): void => {
    setState({});
  };
  return (
    <div className="catalog__films-list">
      {movies.map((item) => <MovieCard key={item.id} movie={item} onMouseOverCapture={handleMouseOverCapture} onMouseOutCapture={handleMouseOutCapture}/>)}
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </div>
  );
}
