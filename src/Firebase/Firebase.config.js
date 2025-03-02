// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjR1avL58FRxqXO3SGvInuK0ZUCUfw88",
  authDomain: "coffee-store-9445b.firebaseapp.com",
  projectId: "coffee-store-9445b",
  storageBucket: "coffee-store-9445b.firebasestorage.app",
  messagingSenderId: "28935905132",
  appId: "1:28935905132:web:31b23be1ecd88e07fc5d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;
