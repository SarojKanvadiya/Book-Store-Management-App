import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const initData = {
    coverImage:"",
    author:"",
    category:"",
    description:"",
    name:"",
    price:"",
    publishingYear:""
}

const AddBook = () => {
    const [data, setData] = useState(initData);
    const navigate = useNavigate()
    const handleChange=(e)=>{
      const {name, value} = e.target;
      setData({...data, [name]:value})
    }

const handleSubmit =async(e)=>{
 e.preventDefault();
 try {
     await axios.post('https://glowing-marsh-cantaloupe.glitch.me/books', data)
     navigate('/books')
     
 } catch (error) {
    alert("failed to add Book")
    console.log(error)
 }
}
  return (
    <div className='form-container'>
    <h1>Add Book</h1>
 <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter Book Cover Url' name='coverImage' onChange={handleChange}/>
    <input type="text" placeholder='Enter Book Name' name='name' onChange={handleChange}/>
    <input type="text" placeholder='Enter Author Name' name='author' onChange={handleChange}/>
    <input type="number" placeholder='Enter Price' name='price' onChange={handleChange} />
    <input type="number" placeholder='Enter Publishing Year' name='publishingYear' onChange={handleChange}/>
    <input type="submit" value="Add Book" />
 </form>
       
    </div>
  )
}

export default AddBook
