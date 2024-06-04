import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCvTVmjihznpA292pQbroMvMjfKqlXu7FA",
    authDomain: "react-firebase-d7307.firebaseapp.com",
    projectId: "react-firebase-d7307",
    storageBucket: "react-firebase-d7307.appspot.com",
    messagingSenderId: "174442664820",
    appId: "1:174442664820:web:08a45c31c10d17d3c75221",
    measurementId: "G-E5Z3LV1CCF",
    databaseURL : "https://react-firebase-d7307-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig)