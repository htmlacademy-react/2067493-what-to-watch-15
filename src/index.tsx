import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TypePromoMovie } from './type';
import { moviesCards, moviesPage } from './mocks/films';

const promoMovie: TypePromoMovie = {
  id: '0',
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  data: 2024
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoMovie={promoMovie} movies={moviesCards}/>
  </React.StrictMode>
);
