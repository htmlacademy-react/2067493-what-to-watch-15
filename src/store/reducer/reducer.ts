import { createReducer } from '@reduxjs/toolkit';
import { moviesCards } from '../../mocks/films';
import { CHANGE_GENRE } from '../actions/action';

const intialStore = {
  genres: 'All genres',
  movies: moviesCards,
};

export const reducer = createReducer(intialStore, (builder) => {
  builder.addCase(CHANGE_GENRE, (state, action) => {
    state.genres = action.payload;
  });
});


