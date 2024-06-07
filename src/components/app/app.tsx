import MainPage from '../main-page/main-page';
import Page404 from '../page404/page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Addresses } from '../../const';
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Addresses.Main} element={<MainPage />} />
        {/* <Route path={Addresses.SignIn} element={<SingnInPage />} />
        <Route path={Addresses.MyList}
          element={
            <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
              <MyListPage moviesFavorite={props.moviesFavorite} />
            </PrivateRoute>
          }
        />
        <Route path={Addresses.Film}>
          <Route path=':id' element={<MoviePage promoMovie={props.promoMovie} moviesPage={props.moviesPage} reviews={props.reviews}/>}>
          </Route>
        </Route>
        <Route path={Addresses.Player} element={<PlayerPage promoMovie={props.promoMovie} moviesPage={moviesPage} />} />
        <Route path={Addresses.AddReview}
          element={
            <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
              <AddReviewPage movies={moviesPage}/>
            </PrivateRoute>
          }
        /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
