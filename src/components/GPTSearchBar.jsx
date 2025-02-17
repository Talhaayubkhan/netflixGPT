import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef, useState } from "react";
import useGeminiMoviesSearch from "../hooks/useGeminiMoviesList";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.lang.language);
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { searchMovies } = useGeminiMoviesSearch();

  const handleMovieSearch = async () => {
    const inputSearchHandler = searchInputRef.current.value;
    if (!inputSearchHandler.trim()) return;
    searchMovies(inputSearchHandler);
    setSearchQuery("");
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
