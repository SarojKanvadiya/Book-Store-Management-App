import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Books = () => {
    const [data, setData] = useState();
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    const navigate = useNavigate()

 useEffect(()=>{
    const fecthBooks =async()=>{
        try {
            const response = await axios.get('https://glowing-marsh-cantaloupe.glitch.me/books')
            console.log(response.data.books)
            setData(response.data.books)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(response.data.message)
        }
    }
    fecthBooks();
 },[])

if(loading) return <h1>Loading...</h1>
if(error) return <p>{error}</p>
  return (
    <div>

        <h1>Explore the Books</h1>
        <button onClick={()=>navigate("/add-book")}>Add Books</button>
    <select name='sorting' >
        <option value="">Price</option>
        <option value="lth">Low to High</option>
        <option value="htl">High to Low</option>
    </select>

    <div className='books-container'>
        {
          data.map((book)=>{
            return(
                <div className='book-card' key={book.id}>
                   <div> <img src={book.coverImage} alt={book.name}/></div>
                    <h3>{book.name}</h3>
                    <h4>Category:  {book.category}</h4>
                    <h3>Price: {book.price}</h3>
                    <p>Pubisheld: {book.publishingYear}</p>
                    <button onClick={()=>navigate(`/books/${book.id}`)}>View Details</button>

                </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default Books
