import { createSlice } from "@reduxjs/toolkit";

const movieSilce = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerMovie: null,
  },

  reducers: {
    addNewPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const { addNewPlayingMovies, addTrailerMovie } = movieSilce.actions;

export default movieSilce.reducer;
