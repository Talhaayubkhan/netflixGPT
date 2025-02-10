import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcommingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import SearchGPT from "./SearchGPT";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <SearchGPT />
      ) : (
        <>
          <MainVideoContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
