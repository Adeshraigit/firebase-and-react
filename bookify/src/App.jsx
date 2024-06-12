import React from 'react'
import { Route, Routes } from 'react-router-dom'
// CSS
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import ListingPage from './pages/List.jsx'
import HomePage from './pages/Home.jsx'
import BookDetailPage from './pages/Detail.jsx'
import ViewOrder from './pages/ViewOrder.jsx'
import ViewOrderDetails from './pages/ViewOrderDetail.jsx'

// Components
// import MyNavbar from './components/Navbar.jsx'
import Auth from './pages/Auth.jsx'
import Mynavbar from './components/Nav.jsx'

function App() {

  return (
  <div>
  <Mynavbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/book/list' element={<ListingPage/>} />
    <Route path='/book/view/:bookId' element={<BookDetailPage/>} />
    <Route path='/book/orders' element={<ViewOrder/>} />
    <Route path='/books/orders/:bookId' element={<ViewOrderDetails/>} />
    <Route path='/auth' element={<Auth/>} />
  </Routes>
  </div>
  )
}

export default App
