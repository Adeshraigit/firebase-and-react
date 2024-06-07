import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCvTVmjihznpA292pQbroMvMjfKqlXu7FA",
    authDomain: "react-firebase-d7307.firebaseapp.com",
    databaseURL: "https://react-firebase-d7307-default-rtdb.firebaseio.com",
    projectId: "react-firebase-d7307",
    storageBucket: "react-firebase-d7307.appspot.com",
    messagingSenderId: "174442664820",
    appId: "1:174442664820:web:fd4104123cfc7c0fc75221",
    measurementId: "G-KRK0F1F45X",
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth =  getAuth(firebaseApp)
const database = getDatabase(firebaseApp)
  
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const [name, setName] = useState("");

    const signupUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putData = (key, data) => set(ref(database, key), data)

    // get(child(ref(database), "users/Adesh")).then(snapShot => console.log(snapShot.val()))

    useEffect(() => {
        onValue(ref(database, "users/Adesh"),(snapShot) => setName(snapShot.val().email))
    }, [])

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailPassword, putData}} >
            <h1>Email is {name}</h1>
            {props.children}
        </FirebaseContext.Provider>
    )
}