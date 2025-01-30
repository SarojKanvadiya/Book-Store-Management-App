import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <h1>Basic information about the book store.</h1>
      <Link to='/books' className='link'>Expolre More</Link>
    </div>
  )
}

export default Home
