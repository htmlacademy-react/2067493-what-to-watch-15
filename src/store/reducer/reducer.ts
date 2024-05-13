import { createReducer } from '@reduxjs/toolkit';
import { moviesCards } from '../../mocks/films';
import { CHANGE_GENRE, CHANGE_RENDER_MOVIES_COUNT, GET_MOVIES_GENRE, RESET_RENDER_MOVIES_COUNT } from '../actions/action';

const intialStore = {
  genre: 'All genres',
  movies: moviesCards,
  moviesGenre: moviesCards,
  moviesRenderCount: 8
};

export const reducer = createReducer(intialStore, (builder) => {
  builder.addCase(CHANGE_GENRE, (state, action) => {
    state.genre = action.payload;
  })
    .addCase(GET_MOVIES_GENRE, (state) => {
      state.moviesGenre = state.genre === 'All genres' ? state.movies : state.movies.filter((movie) => movie.genre === state.genre);
    })
    .addCase(CHANGE_RENDER_MOVIES_COUNT, (state) => {
      state.moviesRenderCount = Math.min(state.moviesGenre.length, state.moviesRenderCount + 8);
    })
    .addCase(RESET_RENDER_MOVIES_COUNT, (state) => {
      state.moviesRenderCount = 8;
    });
});


