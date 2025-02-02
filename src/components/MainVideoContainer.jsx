import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainVideoContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovie);
  if (!movies) return; // Early return (if movies is null, return early)

  const mainMovies = movies[0];
  //   console.log(mainMovies);

  const { original_title, overview, release_date, id } = mainMovies;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        realeseDate={release_date}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainVideoContainer;
