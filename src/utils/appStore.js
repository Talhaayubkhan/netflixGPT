import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    // Define your slice reducers here
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
