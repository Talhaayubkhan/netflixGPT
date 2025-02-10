import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./GPTSlice";
import languageReducer from "./languageSlice";
const appStore = configureStore({
  reducer: {
    // Define your slice reducers here
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    lang: languageReducer,
  },
});

export default appStore;
