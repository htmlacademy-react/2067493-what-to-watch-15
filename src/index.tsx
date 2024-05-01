import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { moviesCards, moviesPage, moviesFavorite, promoMovie } from './mocks/films';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoMovie={promoMovie} movies={moviesCards} moviesFavorite={moviesFavorite} moviesPage={moviesPage} reviews={reviews}/>
  </React.StrictMode>
);
