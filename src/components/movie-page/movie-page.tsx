import { Addresses } from '../../const';
import { TypeMoviesPage, TypeMoviePage, TypeMoviesCards, TypeReviews } from '../../mocks/type-mocks';
import { useParams, Link } from 'react-router-dom';
import Page404 from '../page404/page404';
import ListMovies from '../list-movies/list-movies';
import ComponentOverviewMoviePage from './components-movie-page/components-overview-movie-page/component-overview-movie-page';
import ComponentDetailsMoviePage from './components-movie-page/components-details-movie-page/component-details-movie-page';
import ComponentReviewsMoviePage from './components-movie-page/components-reviews-movie-page/component-reviews-movie-page';
import { useState } from 'react';

type TypePropsMoviePage = {
  promoMovie: TypeMoviePage;
  moviesPage: TypeMoviesPage;
  moviesCards: TypeMoviesCards;
  reviews: TypeReviews;
}

function componentMoviePage (state: string, movie:TypeMoviePage, reviews: TypeReviews) {
  switch (state) {
    case 'overview':
      return <ComponentOverviewMoviePage movie={movie} />;
    case 'details':
      return <ComponentDetailsMoviePage movie={movie}/>;
    case 'reviews':
      return <ComponentReviewsMoviePage movie={movie} reviews={reviews}/>;
  }
}

export default function MoviePage({ moviesPage, promoMovie, moviesCards, reviews }: TypePropsMoviePage): JSX.Element {
  const params = useParams();
  const movie = params.id === promoMovie.id ? promoMovie : moviesPage.find((movieItem) => movieItem.id === params.id);
  const isFavorite: number = moviesPage.filter((item) => item.isFavorite).length;
  const [state, setState] = useState('overview');
  const classActive = 'film-nav__item--active';

  function handleOnClick (evt: React.MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    const value = evt.currentTarget.dataset.value;
    if(!value) {
      return;
    }
    setState(value);
  }

  if (!movie) {
    return <Page404 />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={Addresses.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to={Addresses.SignIn} className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${movie.id}`} className="btn btn--play film-card__button" type="button">
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
                  <span className="film-card__count">{isFavorite}</span>
                </button>
                <Link to={`/films/${movie.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item ${state === 'overview' ? classActive : ''}`}>
                    <a href="#" className="film-nav__link" data-value="overview" onClick={handleOnClick}>Overview
                    </a>
                  </li>
                  <li className={`film-nav__item ${state === 'details' ? classActive : ''}`}>
                    <a href="#" className="film-nav__link" data-value="details" onClick={handleOnClick}> Details
                    </a>
                  </li>
                  <li className={`film-nav__item ${state === 'reviews' ? classActive : ''}`}>
                    <a href="#" className="film-nav__link" data-value="reviews" onClick={handleOnClick}>Reviews
                    </a>
                  </li>
                </ul>
              </nav>

              {componentMoviePage(state, movie, reviews)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {<ListMovies movies={moviesCards.filter((item) => item.genre === movie.genre && item.id !== movie.id).slice(0, 4)} />}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={Addresses.Main} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
