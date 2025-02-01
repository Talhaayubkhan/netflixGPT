import { createSlice } from "@reduxjs/toolkit";

const movieSilce = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
  },

  reducers: {
    addNewPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addNewPlayingMovies } = movieSilce.actions;

export default movieSilce.reducer;
