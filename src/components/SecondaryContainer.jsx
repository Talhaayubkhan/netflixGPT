import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);
  return (
    movies && (
      <div className="bg-[#0f0f0f]">
        <div className="-mt-55 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Horor"} movies={movies} />
          <MovieList title={"Upcomming "} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
