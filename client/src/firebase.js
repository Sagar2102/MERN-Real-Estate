// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c108f.firebaseapp.com",
  projectId: "mern-estate-c108f",
  storageBucket: "mern-estate-c108f.appspot.com",
  messagingSenderId: "903526227994",
  appId: "1:903526227994:web:00752514a2fe9ec5a3b1a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);