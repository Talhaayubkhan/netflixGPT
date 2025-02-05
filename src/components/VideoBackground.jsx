import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailerVideoId = useSelector((store) => store.movies?.trailerMovie);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoId?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
