// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpqTgvko3wbiEdo8BlF0MgfdlKYVnebE",
  authDomain: "chef-recipe-hunter-43426.firebaseapp.com",
  projectId: "chef-recipe-hunter-43426",
  storageBucket: "chef-recipe-hunter-43426.appspot.com",
  messagingSenderId: "1022252582846",
  appId: "1:1022252582846:web:40dcbb6892b49e35869bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;