import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-20">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
