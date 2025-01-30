import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO_URL } from "../utils/constant";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen absolute px-10 py-4 z-10 bg-gradient-to-b from-black flex justify-between items-center">
      <img src={NETFLIX_LOGO_URL} alt="main-logo" className="w-52" />

      {user && (
        <div className="flex items-center space-x-4">
          <img src={user?.photoURL} alt="profile-icon" className="w-10 h-10" />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-black px-4 py-2 shadow-xl cursor-pointer rounded-md"
          >
            Sign Out
          </button>
          {/* TODO: WE WELL DO IT LATER */}
          {/* <select className="bg-black text-white p-2 rounded-md outline-none">
          <option>Manage Profile</option>
          <option>Help Center</option>
          <option>Account Settings</option>
          <option>Sign out</option>
        </select> */}
        </div>
      )}
    </div>
  );
};

export default Header;
