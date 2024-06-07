import { createSlice } from '@reduxjs/toolkit';
import { TypeMoviesCards } from '../type';
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  reducers: {
    loadMoivies(state, action: { type: string; payload: TypeMoviesCards }) {
      state.movies = action.payload;
    },
  },
});

export const { loadMoivies } = movieSlice.actions;

export const moviesReducer = movieSlice.reducer;
