// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBRVAbF1FHH4V2ml5yfGF9zRcFzgRAtL_0",
  authDomain: "netflixgpt-31d80.firebaseapp.com",
  projectId: "netflixgpt-31d80",
  storageBucket: "netflixgpt-31d80.firebasestorage.app",
  messagingSenderId: "263717452006",
  appId: "1:263717452006:web:14ca7276dd0d568a5ba327",
  measurementId: "G-XB66LYZ64X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();