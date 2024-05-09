import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { moviesCards, moviesPage, moviesFavorite, promoMovie } from './mocks/films';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoMovie={promoMovie} movies={moviesCards} moviesFavorite={moviesFavorite} moviesPage={moviesPage} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
