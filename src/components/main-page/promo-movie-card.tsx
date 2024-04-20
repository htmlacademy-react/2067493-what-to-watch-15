import { Link } from 'react-router-dom';
import { TypePromoMovie } from '../../type';

type TypePropsPromoMovie = {
  promoMovie: TypePromoMovie;
}


export default function PromoMovieCard({ promoMovie }: TypePropsPromoMovie): JSX.Element {
  const playMovieLink = `/player/${promoMovie.id}`;
  const moviePageLink = `/films/${promoMovie.id}`;
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <Link to={moviePageLink}><img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" /></Link>
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promoMovie.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoMovie.genre}</span>
            <span className="film-card__year">{promoMovie.data}</span>
          </p>

          <div className="film-card__buttons">
            <Link to={playMovieLink} className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
