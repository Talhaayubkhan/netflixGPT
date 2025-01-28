// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoigpk1x9dBgiLVWFNunngUmzsNx4sxww",
  authDomain: "netflixgpt-792b0.firebaseapp.com",
  projectId: "netflixgpt-792b0",
  storageBucket: "netflixgpt-792b0.firebasestorage.app",
  messagingSenderId: "39746172214",
  appId: "1:39746172214:web:dd1c28da0e15a41107ef97",
  measurementId: "G-X79LJJXZ97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
