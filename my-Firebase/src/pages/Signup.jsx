import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from "../firebase"

const auth = getAuth(app)

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"))
    }

  return (
    <div>
        <div className='m-5'>
          <h1 className='text-3xl font-bold mb-2' >SignUp Page</h1>
        <label 
        className='text-2xl mr-10'
        htmlFor="email">Email</label>
        <input 
        className='h-10 border-2 border-black rounded'
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        type="email" required placeholder='Enter your Email here' />
        </div>

        <div className='m-5'>
        <label 
        className='text-2xl mr-2'
        htmlFor="password">Password</label>
        <input 
         className='h-10 border-2 border-black rounded'
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        type="email" required placeholder='Enter your Password here' />
        </div>
        <button
        className='p-4 m-5 text-xl rounded-3xl bg-blue-500'
        onClick={createUser} >Sign Up</button>
    </div>
  )
}

export default Signup