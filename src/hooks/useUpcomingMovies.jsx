import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);
  const getUpcommingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const jsonData = await data.json();
      // console.log(jsonData.results);
      dispatch(addUpcommingMovies(jsonData.results));
    } catch (error) {
      console.error(error?.message);
    }
  };

  useEffect(() => {
    !upcommingMovies && getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
