import ListMovies from '../list-movies/list-movies';
import PromoMovieCard from './promo-movie-card';
import { Addresses } from '../../const';
import { Link } from 'react-router-dom';
import { TypeMoviePage } from '../../mocks/type-mocks';
import GenresListComponents from '../genres-components/genres-list-components';
import { useAppSelector } from '../../utils';

type TypePropsMainPage = {
  promoMovie: TypeMoviePage;
}

export default function MainPage({promoMovie}: TypePropsMainPage): JSX.Element {
  const genre = useAppSelector((store) => store.genre);
  const movies = useAppSelector((store) => store.movies);
  const genreMovies = genre === 'All genres' ? movies : movies.filter((movie) => movie.genre === genre);
  return (
    <>
      <section className="film-card">
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
                <Link to={Addresses.MyList}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={Addresses.SignIn} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <PromoMovieCard promoMovie={promoMovie}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresListComponents/>

          <ListMovies movies={genreMovies}/>
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
