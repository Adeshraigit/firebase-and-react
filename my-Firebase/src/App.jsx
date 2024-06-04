import { useState } from 'react'
import './App.css'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database"
import { app } from "./firebase"
import Signup from './pages/Signup'
import SigninPage from './pages/Signin'

// const db = getDatabase(app)
// const auth = getAuth(app)

function App() {
  // const signupUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     'adeshrai.dev@gmail.com',
  //     'adseh@123'
  //   ).then((value) => console.log(value) )
  // }

  // const putData = () => {
  //   set(ref(db,"users/adesh"), {
  //     id: 1,
  //     name: "Adesh Rai",
  //     age: "18"
  //   })
  // }

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Firebase React App  
    </h1>
    {/* <button className='p-4 m-5 text-xl rounded-3xl bg-blue-500' onClick={putData} >Put data</button> 
    <button className='p-4 m-5 text-xl rounded-3xl bg-blue-500' onClick={signupUser} >Create User</button>
    */}
    <Signup/>
    <SigninPage/>
    </>
  )
}

export default App
