import { useState } from 'react'
import { 
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore"
import { app } from "./firebase"
import './App.css'

function App() {
  const firestore = getFirestore(app)

  const writeData = async () => {
    const result  = await addDoc(collection(firestore, 'cities'), {
      name: 'Mumbai',
      pinCode: 1234,
      lat: 123,
      long: 456,
    });
    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, 'cities/ObsgfzNcdQ6De3XeY3Hq/places'), {
      name: "This a place",
      desc: "Awsm Desc",
      date: Date.now(),
    })
  }

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "ObsgfzNcdQ6De3XeY3Hq");
    const snap = await getDoc(ref);

    console.log(snap.data())
  }

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where('isMale',"==", true ));
    const snapShot = await getDocs(q);
    snapShot.forEach((data) => console.log(data.data()));
  }

  const update = async () => {
    const docRef  = doc(firestore, 'cities', "ObsgfzNcdQ6De3XeY3Hq");
    await updateDoc(docRef, {
      name: 'New Delhi'
    })
  }

  return (
    <>
    <h1 className="text-3xl font-bold">
      Firebase Store
    </h1>
    <button 
    className='bg-gray-200 border-black border m-5'
    onClick={writeData} >Put Data
    </button>
    <button 
    className='bg-gray-200 border-black border m-5'
    onClick={makeSubCollection} >Put  Sub Data</button>
    <button 
    className='bg-gray-200 border-black border m-5'
    onClick={getDocument} >Get Document
    </button>
    <button 
    className='bg-gray-200 border-black border m-5'
    onClick={getDocumentsByQuery} >Get Document By Query
    </button>
    <button 
    className='bg-gray-200 border-black border'
    onClick={update} >Update
    </button>
    </>
  )
}

export default App
