import { Link } from 'react-router-dom';
import { TypeMovieCard } from '../../mocks/type-mocks';

type TypePropsMovieCard = {
  movie: TypeMovieCard;
  onMouseOverCapture: (value: TypeMovieCard) => void;
  onMouseOutCapture: () => void;
}
export default function MovieCard({ movie, onMouseOverCapture, onMouseOutCapture}: TypePropsMovieCard): JSX.Element {
  const movieLink = `/films/${movie.id}`;
  return (
    <article
      onMouseOverCapture={() => {
        onMouseOverCapture(movie);
      }}
      onMouseOutCapture={onMouseOutCapture}
      className="small-film-card catalog__films-card"
    >
      <Link to={movieLink}>
        <div className="small-film-card__image">
          <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={movieLink} className="small-film-card__link" >{movie.name}</Link>
      </h3>
    </article>
  );
}
