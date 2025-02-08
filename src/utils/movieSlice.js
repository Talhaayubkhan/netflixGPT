import { createSlice } from "@reduxjs/toolkit";

const movieSilce = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    popularMovies: null,
    trendingMovies: null,
    upcommingMovies: null,
    trailerMovie: null,
  },

  reducers: {
    addNewPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const {
  addNewPlayingMovies,
  addTrailerMovie,
  addPopularMovies,
  addTrendingMovies,
  addUpcommingMovies,
} = movieSilce.actions;

export default movieSilce.reducer;
