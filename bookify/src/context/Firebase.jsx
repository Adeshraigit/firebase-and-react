import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"
import {getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'

const FirebaseContext =  createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCfaPjMBNeH9ymIZWFWY0F8JTgV3ScpkXw",
    authDomain: "bookify-4c013.firebaseapp.com",
    projectId: "bookify-4c013",
    storageBucket: "bookify-4c013.appspot.com",
    messagingSenderId: "824051913566",
    appId: "1:824051913566:web:2a8b94e4f47e85ea7c75cf"
  };

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

export const FirebaseProvider = (props)  => {

    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword,
        signinWithGoogle
         }} >
            {props.children}
        </FirebaseContext.Provider>
    )
}