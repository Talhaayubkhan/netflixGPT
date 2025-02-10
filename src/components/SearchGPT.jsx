import { NETFLIX_BACKGROUND_IMG } from "../utils/constant";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const SearchGPT = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img alt="background-img" src={NETFLIX_BACKGROUND_IMG} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default SearchGPT;
