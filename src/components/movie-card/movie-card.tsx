import { Link } from 'react-router-dom';
import { TypeMovie } from '../../type';

type TypePropsMovieCard = {
  movie: TypeMovie;
}
export default function MovieCard({ movie }: TypePropsMovieCard): JSX.Element {
  const movieLink = `/films/${movie.id}`;
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={movieLink}>
        <div className="small-film-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={movieLink} className="small-film-card__link" >Fantastic Beasts: The Crimes of Grindelwald</Link>
      </h3>
    </article>
  );
}
