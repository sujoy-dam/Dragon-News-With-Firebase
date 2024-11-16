// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARuB4sm6b69osx5TuNh8KUhulwyRZu5Qo",
  authDomain: "dragon-news-4c53a.firebaseapp.com",
  projectId: "dragon-news-4c53a",
  storageBucket: "dragon-news-4c53a.firebasestorage.app",
  messagingSenderId: "705650616513",
  appId: "1:705650616513:web:0a038864f146d9824ccc40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;