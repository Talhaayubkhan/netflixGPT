import { useMovieTrailer } from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  useMovieTrailer({ movieId });
  return <div>VideoBackground</div>;
}

export default VideoBackground;
