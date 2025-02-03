import { NETFLIX_PLAY_ICON } from "../utils/constant";

function VideoTitle({ title, overview, realeseDate }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold"> {title}</h1>
      <p className="text-xl font-semibold text-white w-[45rem] py-5">
        {overview}
      </p>
      <p className="text-lg font-semibold text-white">
        Realease Date: {realeseDate}
      </p>

      <div className="flex space-x-4 py-6 cursor-pointer">
        <button className="bg-white text-black px-13 rounded-lg hover:bg-opacity-80">
          <img
            src={NETFLIX_PLAY_ICON}
            alt="play_icon"
            className="w-10 h-10 inline-block"
          />
          <span className="font-bold text-xl">Play</span>
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
