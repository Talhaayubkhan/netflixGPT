import { NETFLIX_INFO_ICON, NETFLIX_PLAY_ICON } from "../utils/constant";

function VideoTitle({ title, overview, realeseDate }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-5 md:px-30 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold"> {title}</h1>
      <p className="text-xl font-semibold text-white w-[40rem] py-5">
        {overview}
      </p>
      <p className="text-lg font-semibold text-white">
        Realease Date: {realeseDate}
      </p>

      <div className="flex space-x-6 py-6">
        <button className="bg-white text-black px-8 py-2 rounded-lg flex items-center justify-center space-x-2">
          <img src={NETFLIX_PLAY_ICON} alt="play_icon" className="w-8 h-8" />
          <span className="font-bold text-xl hover:bg-opacity-50">Play</span>
        </button>
        <button className="bg-gray-500 text-black px-4 py-2 text-lg bg-opacity-50 rounded-lg flex items-center justify-center">
          <img
            src={NETFLIX_INFO_ICON}
            alt="info_icon"
            className="w-8 h-8 text-white"
          />
          <span className="font-bold text-xl px-2">More Info</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
