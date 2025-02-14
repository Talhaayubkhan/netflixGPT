import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef, useState } from "react";
import { model } from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constant";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.lang.language);
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch movie details from TMDB based on a given movie title
  const fetchMovieFromTMDB = async (movieTitle) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const handleMovieSearch = async () => {
    setSearchQuery("");

    try {
      const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchInputRef.current.value}. Only give me 5 movies, comma-separated like the example results: horror, Don, Interstellar, Sci-Fi, Comedy and etc.`;

      const result = await model.generateContent(prompt);
      // Extract movie names from Gemini AI response
      const recommendedMovies = result.response.text().split(", ");

      // Fetch additional details for each recommended movie from TMDB
      const movieDetailsPromises = recommendedMovies.map((movie) =>
        fetchMovieFromTMDB(movie)
      );

      // Resolve all promises to get the final movie details
      const movieResults = await Promise.all(movieDetailsPromises);
      console.log(movieResults);
    } catch (error) {
      console.error("Error while generating movie recommendations:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black text-white grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInputRef}
          type="text"
          className="p-4 m-5 col-span-9 bg-white text-black font-bold text-2xl"
          placeholder={
            lang[selectedLanguage]?.gptSearchPlaceholder || "Search..."
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-4 m-4 col-span-3 bg-red-800 text-white cursor-pointer font-bold text-2xl rounded-lg"
          onClick={handleMovieSearch}
        >
          {lang[selectedLanguage]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
