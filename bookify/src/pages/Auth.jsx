import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useFirebase } from '../context/Firebase'

const Auth = () => {
    const firebase = useFirebase()

    if(!(firebase.user)) {
        return <><Login/></>
      } 
      else  return <><Logout/></>
        
      
}

export default Auth