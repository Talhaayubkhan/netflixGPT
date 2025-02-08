import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    movies && (
      <div className="bg-[#0f0f0f]">
        <div className="-mt-55 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          {/* <MovieList title={"Horor"} movies={movies.nowPlayingMovie} /> */}
          <MovieList title={"Upcomming "} movies={movies.upcommingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
