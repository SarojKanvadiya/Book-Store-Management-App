import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const initData = {
    coverImage:"",
    author:"",
    category:"",
    description:"",
    name:"",
    price:"",
    publishingYear:""
}
const EditBook = () => {
    const {id} = useParams();
    const [book, setBook] = useState(initData);
 const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value})
      }
      const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            await axios.put(`https://glowing-marsh-cantaloupe.glitch.me/books`,book)
            navigate('/books')
            
        } catch (error) {
           alert("failed to add Book")
           console.log(error)
        }
       }
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

  return (
    <div className='form-container'>
    <h1>Add Book</h1>
 <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter Book Cover Url' name='coverImage' onChange={handleChange}/>
    <input type="text" placeholder='Enter Book Name' name='name' onChange={handleChange}/>
    <input type="text" placeholder='Enter Author Name' name='author' onChange={handleChange}/>
    <input type="number" placeholder='Enter Price' name='price' onChange={handleChange} />
    <input type="number" placeholder='Enter Publishing Year' name='publishingYear' onChange={handleChange}/>
    <input type="submit" value="Edit Book" />
 </form>
       
    </div>
  )
}

export default EditBook
