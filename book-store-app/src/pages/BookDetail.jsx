import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const BookDetail = () => {
    const {id} = useParams();
    const [book, setBook] = useState();
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    const navigate = useNavigate()

useEffect(()=>{
    const fecthBooks =async()=>{
        try {
            const response = await axios.get(`https://glowing-marsh-cantaloupe.glitch.me/books/${id}`)
            console.log(response.data)
           setBook(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            alert("failed to fetch data")
        }
    }
    fecthBooks();
},[id])
if(loading) return <h1>Loading...</h1>
if(error) return <p>{error}</p>
  return (
    <div className='books-container'>
        <div className='book-detail-card'>
            <h1>{book.name}</h1>
            <img src={book.coverImage} alt={book.name}/>
            <p>{book.description}</p>
            <h3>Author: {book.author}</h3>
            <h3>Price: {book.price}</h3>
            <p><strong>Published: </strong>{book.publishingYear}</p>
            <button onClick={()=>navigate(`/edit-book/${book.id}`)}>Edit Book</button>
        </div>
      
    </div>
  )
}

export default BookDetail
