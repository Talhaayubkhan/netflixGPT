import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
const GPTSearchBar = () => {
  const changeLanguageKey = useSelector((store) => store.lang.language);
  // console.log(changeLanguageKey);

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black text-white grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-5 col-span-9 bg-white text-black font-bold text-2xl"
          placeholder={
            lang[changeLanguageKey]?.gptSearchPlaceholder || "Search..."
          }
        />
        <button className="px-4 m-4 col-span-3 bg-red-800 text-white cursor-pointer font-bold text-2xl rounded-lg">
          {lang[changeLanguageKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
