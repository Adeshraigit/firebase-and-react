import { useState, useEffect } from 'react'
import './App.css'
import {getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database"
import { app } from "./firebase"
import Signup from './pages/Signup'
import SigninPage from './pages/Signin'

// const db = getDatabase(app)
const auth = getAuth(app)

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user) {
        // Logged In
        // console.log('Hello', user);
        setUser(user)
      } else {
        // User is logged out
        console.log("Your logged out");
        setUser(null)
      }
    })
  },[]);

  if(user === null) {
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
  } else {
    return (
    <div 
    className="text-3xl font-bold "
    >
      <h1>Hello {user.email}</h1>
      <button 
      className='p-4 m-5 text-xl rounded-3xl bg-blue-500'
      onClick={() => signOut(auth)} >Logout</button>
    </div>
    )
  }

}

export default App
