export const NETFLIX_LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_PROFILE_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const NETFLIX_PLAY_ICON =
  "https://i.pinimg.com/736x/2c/86/cd/2c86cd6329762b92e6341fb8e725156e.jpg";

export const NETFLIX_INFO_ICON =
  "https://www.pngplay.com/wp-content/uploads/7/More-Info-Button-PNG-HD-Quality.png";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300";

export const NETFLIX_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/PK-en-20250120-TRIFECTA-perspective_132ec7cb-f8cf-4633-92d4-c99629cac9a3_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};

export const SUPPORTED_LANGUAGES = [
  { id: 1, identifier: "en", name: "English" },
  { id: 2, identifier: "pash", name: "Pashto" },
  { id: 3, identifier: "es", name: "Español" },
  { id: 4, identifier: "ur", name: "Urdu" },
];
