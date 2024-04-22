import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import SingnInPage from '../singn-in-page/singn-in-page';
import PlayerPage from '../player-page/player-page';
import Page404 from '../page404/page404';
import PrivateRoute from '../private-route/private.route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Addresses, AutorizationStatus } from '../../const';
import { TypeMoviesCards, TypeMoviesPage, TypeMoviePage } from '../../mocks/type-mocks';

type TypeAppProps = {
  promoMovie: TypeMoviePage;
  movies: TypeMoviesCards;
  moviesFavorite:TypeMoviesCards;
  moviesPage: TypeMoviesPage;
}

export default function App(props: TypeAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Addresses.Main} element={<MainPage promoMovie={props.promoMovie} movies={props.movies} />} />
        <Route path={Addresses.SignIn} element={<SingnInPage />} />
        <Route path={Addresses.MyList}
          element={
            <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
              <MyListPage moviesFavorite={props.moviesFavorite} />
            </PrivateRoute>
          }
        />
        <Route path={Addresses.Film}>
          <Route path=':id' element={<MoviePage promoMovie={props.promoMovie} moviesPage={props.moviesPage} moviesCards={props.movies} />}>
          </Route>
        </Route>
        <Route path={Addresses.Player} element={<PlayerPage />} />
        <Route path={Addresses.AddReview}
          element={
            <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
