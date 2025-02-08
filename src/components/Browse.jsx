import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcommingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      <MainVideoContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
