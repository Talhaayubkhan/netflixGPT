import { NETFLIX_PLAY_ICON } from "../utils/constant";

function VideoTitle({ title, overview, realeseDate }) {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold"> {title}</h1>
      <h1 className="text-xl font-semibold text-white w-1/4 py-5">
        {overview}
      </h1>
      <p className="text-lg font-semibold text-white">
        Realease Date: {realeseDate}
      </p>

      <div className="flex space-x-4 py-6 ">
        <button className="bg-white text-black p-2 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <img
            src={NETFLIX_PLAY_ICON}
            alt="play_icon"
            className="w-6 h-6 inline-block"
          />
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
