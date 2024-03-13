// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9IGsBfAhB77DYIok8z2bl3HyLGbkXwFc",
  authDomain: "netflixgpt-b26d9.firebaseapp.com",
  projectId: "netflixgpt-b26d9",
  storageBucket: "netflixgpt-b26d9.appspot.com",
  messagingSenderId: "788053528854",
  appId: "1:788053528854:web:3be187f04e3e3e08420037",
  measurementId: "G-T41RWFBC2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();