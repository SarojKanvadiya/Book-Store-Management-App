import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* all Routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={
          <Books/>
        }/>
        <Route path='/books/:id' element={
          <BookDetail/>
        }/>
        <Route path='add-book' element={
          <AddBook/>
        }/><Route path='edit-book/:id' element={
          <EditBook/>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
