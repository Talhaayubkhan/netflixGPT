import { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignUp = () => {
    setIsSigninForm(!isSigninForm);
    setErrorMessage(null); // Reset errors when switching forms
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = validateFormData(
      fullName.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // if the form data is valid, then proceed,
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/PK-en-20250120-TRIFECTA-perspective_132ec7cb-f8cf-4633-92d4-c99629cac9a3_large.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded-lg opacity-85"
      >
        <h1 className="text-white text-3xl font-bold mb-5">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            className="w-full p-4 my-4 text-white border border-white"
            type="text"
            placeholder="Full Name"
            ref={fullName}
          />
        )}
        <input
          className="w-full p-4 my-4 text-white border border-white"
          type="email"
          placeholder="Email or phone number"
          ref={email}
        />
        <input
          className="w-full p-4 my-4  text-white border border-white"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="w-full p-2 my-4 bg-red-500 text-white font-bold rounded-md cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-2">
          {isSigninForm ? (
            <p className="text-white px-1">
              New To Netflix?
              <span className="font-bold cursor-pointer" onClick={toggleSignUp}>
                {" "}
                Sign Up now.
              </span>
            </p>
          ) : (
            <p className="text-white px-1">
              Already Register?
              <span className="font-bold cursor-pointer" onClick={toggleSignUp}>
                {" "}
                Sign In Now.
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
