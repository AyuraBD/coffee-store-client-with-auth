// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCoUwJCYxgrIQe3WggAXGYGHkbC45Q_Do",
  authDomain: "coffee-store-70924.firebaseapp.com",
  projectId: "coffee-store-70924",
  storageBucket: "coffee-store-70924.firebasestorage.app",
  messagingSenderId: "497553006429",
  appId: "1:497553006429:web:69c064a77b3e9901f712b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;
