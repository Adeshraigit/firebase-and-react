import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app"
import {getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, query, where } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

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
const firestore = getFirestore(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export const FirebaseProvider = (props)  => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, [])

    const signOutUser = () => {
        signOut(firebaseAuth);
        alert(`${user.displayName} logged out`)
    }

    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const handleCreatteNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
        const uploadResult = await uploadBytes(imageRef, cover);
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbn,
            price,
            imageURl : uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURl: user.photoURL,
        })

    }

    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"));
    }

    const getBookById = async (id) => {
        const docRef = doc(firestore, 'books', id);
        const result = await getDoc(docRef)
        return result;
    }

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path))
    }

    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, 'books', bookId, "orders")
        const result = await addDoc(collectionRef, {
            displayName: user.displayName,
            userID: user.uid,
            userEmail: user.email,
            photoURl: user.photoURL,
            qty: Number(qty),
        })
        return result;
    };

    const fetchMyBooks = async (userId) => {
        const collectionRef = collection(firestore, "books");
        const q = query(collectionRef, where('userID', '==', userId))
        const result = await getDocs(q);

        return result
    }

    const getOrders = (bookId) => {
        const collectionRef = collection(firestore, 'books', bookId, 'orders');
        const result = getDocs(collectionRef);
        return result; 
    }

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
        handleCreatteNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
        placeOrder,
        fetchMyBooks,
        user,
        getOrders,
        signOutUser
         }} >
            {props.children}
        </FirebaseContext.Provider>
    )
}