import React from 'react'
import { useFirebase } from '../context/Firebase'


const Logout = () => {

    const firebase =  useFirebase();

  return (
    <div className='container' >
        <h1>Logout</h1>
        <button onClick={firebase.signOutUser} >Logout</button>
    </div>
  )
}

export default Logout