import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movies: null,
  },

  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGeminiMoviesResult: (state, action) => {
      const { movieNames, movies } = action.payload;
      state.movieNames = movieNames;
      state.movies = movies;
    },
    clearGeminiMoviesResult: (state) => {
      state.movieNames = null;
      state.movies = null;
    },
  },
});

export const {
  toggleGPTSearchView,
  addGeminiMoviesResult,
  clearGeminiMoviesResult,
} = GPTSlice.actions;

export default GPTSlice.reducer;
