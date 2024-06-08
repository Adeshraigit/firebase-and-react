import React from 'react'
import { Route, Routes } from 'react-router-dom'
// CSS
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// Pages
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'



function App() {

  return <Routes>
    <Route path='/' element={<h1>Home time:15:52</h1>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
}

export default App
