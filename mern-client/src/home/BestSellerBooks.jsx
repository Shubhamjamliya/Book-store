import React, { useState } from 'react'
import { useEffect } from 'react'
import BookCard from '../components/BookCard'

const BestSellerBooks = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
       fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=> setBooks(data.slice(0,8))); 
    },[])
  return (
    <div>
        <BookCard books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks