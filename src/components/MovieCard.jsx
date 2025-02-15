import { IMG_CDN_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  if (!posterPath) return;
  return (
    <div className="w-60">
      <img alt="img_url" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
