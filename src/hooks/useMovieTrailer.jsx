import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

export const useMovieTrailer = ({ movieId }) => {
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    //     console.log(json);

    const trailer = json.results.filter((v) => v.name === "Official Trailer");
    console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
