import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvTVmjihznpA292pQbroMvMjfKqlXu7FA",
    authDomain: "react-firebase-d7307.firebaseapp.com",
    databaseURL: "https://react-firebase-d7307-default-rtdb.firebaseio.com",
    projectId: "react-firebase-d7307",
    storageBucket: "react-firebase-d7307.appspot.com",
    messagingSenderId: "174442664820",
    appId: "1:174442664820:web:af215d0c4044858bc75221",
    measurementId: "G-QM7DP7VYKZ"
  };

export const app = initializeApp(firebaseConfig);