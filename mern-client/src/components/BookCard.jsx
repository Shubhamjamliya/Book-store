import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { AuthContext } from '../contects/AuthProvider';
import { useCart } from '../contects/CartContext';

const BookCard = ({books,headLine}) => {
  const {user}=useContext(AuthContext);
  const [count,setCount]=useState(books.length);
  const { updateCount } = useCart();

  const handleAdd=(id,url,title)=>{
    const bookId=id;
    const bookTitle=title;
    const imageURL=url;
    // console.log(bookId,userId);

    const cartobj= {
      bookId,bookTitle,imageURL
    }
    // console.log(cartobj);
    
    // Send data to Db
    fetch("http://localhost:5000/upload-cart",{
      method:"POST",
      headers: {
        "content-type":"application/json",
      },
      body:JSON.stringify(cartobj)
    }).then(res=> res.json()).then(data=> {
      alert("Book added to cart successfully!!!");
      updateCount();
    })
    
  }

  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headLine}</h2>
        {/* cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
         {
            books.map(book=> <SwiperSlide key={book._id}>
                    <Link to={`/book/${book._id}`}>
                        <div className='relative'>
                            <img src={book.imageURL} alt=''/>
                            <div onClick={(event) => {event.stopPropagation();event.preventDefault();handleAdd(book._id,book.imageURL,book.bookTitle);}} className='absolute top-3 right-3  bg-blue-600 hover:bg-black p-2 rounded'>
                                <FaCartShopping className='w-4 h-4 text-white'/>
                            </div>
                        </div>
                        <div>
                            <h3>{book.bookTitle}</h3>
                            <p>{book.authorName}</p>
                        </div>
                        <div>
                            <p>$10.00</p>
                        </div>
                    </Link>
                </SwiperSlide>)
         }

      </Swiper>
        </div>
    </div>
  )
}

export default BookCard