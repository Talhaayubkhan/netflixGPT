import { model } from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constant";
import { addGeminiMoviesResult } from "../utils/GPTSlice";
import { useDispatch } from "react-redux";

const useGeminiMoviesSearch = () => {
  const dispatch = useDispatch();

  // Fetch movie details from TMDB based on a given movie title
  const fetchMovieFromTMDB = async (movieTitle) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const searchMovies = async (query) => {
    if (!query) return;
    try {
      const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: ${query}. Only give me 5 movies, comma-separated like the example results: horror, Don, Interstellar, Sci-Fi, Comedy and etc.`;

      const result = await model.generateContent(prompt);
      // Extract movie names from Gemini AI response
      const recommendedMoviesNames = result.response.text().split(", ");

      // Fetch additional details for each recommended movie from TMDB
      const movieDetailsPromises = recommendedMoviesNames.map((movie) =>
        fetchMovieFromTMDB(movie)
      );

      // Resolve all promises to get the final movie details
      const movieResults = await Promise.all(movieDetailsPromises);
      dispatch(
        addGeminiMoviesResult({
          movieNames: recommendedMoviesNames,
          movies: movieResults,
        })
      );
    } catch (error) {
      console.error("Error while generating movie recommendations:", error);
    }
  };
  return { searchMovies };
};

export default useGeminiMoviesSearch;
