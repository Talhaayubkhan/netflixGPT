import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerMovie);

  // Fetching the movie trailer from the API
  const getMovieTrailer = async () => {
    // the Api was dynamically loaded
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((v) => v.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
