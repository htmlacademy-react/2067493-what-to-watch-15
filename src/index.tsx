import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { moviesPage, moviesFavorite, promoMovie } from './mocks/films';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';
import { Summa } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
