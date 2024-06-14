import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

const OtherBooks = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
       fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=> setBooks(data.slice(4,12))); 
    },[])
  return (
    <div>
        <BookCard books={books} headLine="Other Books"/>
    </div>
  )
}

export default OtherBooks
