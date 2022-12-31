import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Update.scss'

export const Update = () => {
  const [book, setbooks] = useState({
    image:"",
    title:"",
    description:"",
    price:"",
  })

  const Navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) =>{
       setbooks(prev=>({...prev,[e.target.name]: e.target.value}))
  }
 
  const handleClick = async (e) =>{
    e.preventDefault()
    try{
      console.log(bookId);
       await axios.put("http://localhost:5000/books/" + bookId,book)  
       Navigate ("/")
    } catch(err){
      console.log(err)
    }
  }
  console.log(book)

  return (
    <div className='form'>
        <h1 className='update-header'>Updated the Books</h1>
        {/* <input className='input-field' type="text" placeholder='title' onChange={handleChange} name='image'/> */}
        <input className='input-field' type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input  className='input-field'  type="text" placeholder='description' onChange={handleChange} name='description'/>
        <input  className='input-field'  type="text" placeholder='price' onChange={handleChange} name='price'/>
        <button className='submit-btn' onClick={handleClick}>Update</button>
    </div>
  )
}

