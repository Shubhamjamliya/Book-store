import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contects/CartContext';


const Shop = ({ children }) => {
  const [books, setBooks] = useState([])
  const { user } = useContext(AuthContext);
  const location=useLocation();
  const navigate = useNavigate();
  const { updateCount } = useCart();


  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])

  const handleAdd = (id, url, title) => {
    if (!user) {
      navigate('/login', { state: { from: location }, replace: true });
      return; // Stop execution of the function
    }
    const bookId = id;
    const bookTitle = title;
    const imageURL = url;
    // console.log(bookId,userId);

    const cartobj = {
      bookId, bookTitle, imageURL
    }
    // console.log(cartobj);

    // Send data to Db
    fetch("http://localhost:5000/upload-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartobj)
    }).then(res => res.json()).then(data => {
      alert("Book added to cart successfully!!!");
      updateCount();
    })
  }


  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Boooks are Here</h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
        {
          books.map(book =>
            <Card key={book._id}>
              <Link to={`/book/${book._id}`}>
                <img src={book.imageURL} alt='' className='h-96'></img>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                    {book.bookTitle}
                  </p>
                </h5>
                <p className='font-normal text-gray-700 darK:text-gray-400'>
                  <p>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea eum iusto earum qui cupiditate molestias fugit eligendi adipisci aperiam doloribus aliquam, magnam commodi. */}
                    {/* {book.bookDescription} */}
                    
                  </p>
                </p>
                <button onClick={(event) => { event.stopPropagation(); event.preventDefault(); handleAdd(book._id, book.imageURL, book.bookTitle)}} className='bg-blue-700 font-semibold text-white py-2 rounded w-1/2'>Add To Cart</button>
              </Link>
            </Card>
          )
        }
      </div>

    </div>

  )
}

export default Shop
