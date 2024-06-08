import React from 'react'
import { Route, Routes } from 'react-router-dom'
// CSS
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ListingPage from './pages/List.jsx'
import HomePage from './pages/Home.jsx'

// Components
import MyNavbar from './components/Navbar.jsx'

function App() {

  return (
  <div>
  <MyNavbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/book/list' element={<ListingPage/>} />
  </Routes>
  </div>
  )
}

export default App
