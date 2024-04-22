import { Addresses } from '../../const';
import { Link, useParams } from 'react-router-dom';
import { TypeMoviesPage } from '../../mocks/type-mocks';
import Page404 from '../page404/page404';
import FormAddReview from './form-add-review';

type TypeAddReviewPageProps = {
  movies: TypeMoviesPage;
}

export default function AddReviewPage({ movies }: TypeAddReviewPageProps): JSX.Element {
  const params = useParams();
  const movie = movies.find((item) => item.id === params.id);
  return (
    movie ?
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={Addresses.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

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

          <div className="film-card__poster film-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <FormAddReview/>
        </div>
      </section> :
      <Page404 />
  );
}
