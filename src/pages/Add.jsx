import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Add.scss'
export const Add = () => {
  const [book, setbooks] = useState({
    image:"",
    title:"",
    description:"",
    price:"",
  })

  const Navigate = useNavigate()
  const handleChange = (e) =>{
       setbooks(prev=>({...prev,[e.target.name]: e.target.value}))
  }
 
  const handleClick = async (e) =>{
    e.preventDefault()
    try{
       await axios.post("http://localhost:5000/books",book)  
       Navigate ("/")
    } catch(err){
      console.log(err)
    }
  }
  console.log(book)

  return (
    <div className='form'>
        <h1 className='add-header'>Add New Books</h1>
        <input className='image-field' type="file" placeholder='title' onChange={handleChange} name='image'/>
        <input className='input-field' type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input className='input-field' type="text" placeholder='description' onChange={handleChange} name='description'/>
        <input className='input-field' type="text" placeholder='price' onChange={handleChange} name='price'/>
        <button className='submit-btn' onClick={handleClick}>Add</button>
    </div>
  )
}
