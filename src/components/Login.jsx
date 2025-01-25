import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/PK-en-20250120-TRIFECTA-perspective_132ec7cb-f8cf-4633-92d4-c99629cac9a3_large.jpg"
        />
      </div>

      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded-lg opacity-85">
        <h1 className="text-white text-3xl font-bold mb-5">Sign In</h1>
        <input
          className="w-full p-4 my-4 text-white"
          type="email"
          placeholder="Email or phone number"
        />
        <input
          className="w-full p-4 my-4  text-white"
          type="password"
          placeholder="Password"
        />
        <button
          className="w-full p-2 my-5 bg-red-500 text-white font-bold rounded-lg"
          type="submit"
        >
          Sign In
        </button>
        {/* <div className="my-2">
          <input type="checkbox" />
          <span className="ml-2">Remember me</span>
        </div> */}
        <p className="px-2">
          <span className="text-gray-300">New To Netflix?</span>
          <span className="font-bold text-white px-1">
            <Link to="/signup">Sign up now.</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
