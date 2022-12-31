import React from 'react';
import { useEffect } from 'react';
import '../styles/Books.scss'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const Allbooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    Allbooks()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/books/" + id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <h1 className='header'> MY FIRST CRUD PROJECT  </h1>
      <div className="books">
        {books.map((book => {
          return (
            <div className='book' key={book.id}>
              <div className='card'>
                <img className='card-img' src="https://picsum.photos/seed/picsum/200/300" alt='' />
                {/* <h5>{book.id}</h5> */}
                 <h3>{book.title}</h3>
                 <p>{book.description}</p>
                 <p style={{ color: "blue" }}>{book.price}</p>
                 <div className='btn-container'>
                  <button className='delete-btn' onClick={() => handleDelete(book.id)}>Delete</button>
                  <button className='update-btn'> <Link style={{ textDecoration: "none", color: 'white' }} to={`/update/${book.id}`}>Update</Link></button>
                </div>
              </div>
            </div>
          )
        }
        ))}
      </div>
      <button className='add-btn'><Link style={{ textDecoration: "none", color: 'white' }} to="/add">Add to New books</Link></button>
    </>
  )
}

