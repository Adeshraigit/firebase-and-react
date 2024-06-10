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
import BookDetailPage from './pages/Detail.jsx'
import ViewOrder from './pages/ViewOrder.jsx'

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
    <Route path='/book/view/:bookId' element={<BookDetailPage/>} />
    <Route path='/book/orders' element={<ViewOrder/>} />
  </Routes>
  </div>
  )
}

export default App
