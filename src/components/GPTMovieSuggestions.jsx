import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movies } = useSelector((store) => store.gpt);
  if (!movieNames) return;

  return (
    <div className="px-5 py-5 bg-black/50 text-white m-5 backdrop-blur-md">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
