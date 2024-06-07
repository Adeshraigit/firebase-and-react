import { useState } from 'react'
import './App.css'
import { useFirebase } from './context/Firebase'

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Firebase", firebase);

  return (
    <>
     <h1 className="text-5xl font-bold">
      Firebase!
    </h1>
    <input 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    type="email"
    placeholder='Enter Email here' />
    <input 
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    type="password" 
    placeholder='Enter Password here' />
    <button onClick={() => {firebase.signupUserWithEmailPassword(email,password)
      firebase.putData('users/' + "Adesh" , {email, password});
    } } >
      Sign Up
    </button>
    </>
  )
}

export default App
