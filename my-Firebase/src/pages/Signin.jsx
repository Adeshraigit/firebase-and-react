import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase"
import React, {useState} from "react";

const auth = getAuth(app);

const SigninPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => console.log("sign in Success"))
        .catch((err) =>  console.log(err))
    }

    return (
        <div className="signin-page m-5">
            <h1 className='text-3xl font-bold mb-2' >SignIn Page</h1>
            <div>
            <label 
            className='text-2xl mr-10'
            htmlFor="email">Enter your email</label>
            <input
             className='h-10 border-2 border-black rounded'
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email" placeholder="Enter your email here" />
            </div>
            <div>
            <label 
            className='text-2xl'
            htmlFor="email">Enter your password</label>
            <input 
             className='h-10 border-2 border-black rounded'
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password" placeholder="Enter your password here" />
            </div>
            <button 
            className='p-4 m-5 text-xl rounded-3xl bg-blue-500'
            onClick={signinUser} >Sign In</button>
        </div>
    )
}

export default SigninPage