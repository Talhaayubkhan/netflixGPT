import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainVideoContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
