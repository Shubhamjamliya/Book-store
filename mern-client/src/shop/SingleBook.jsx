import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Button } from "flowbite-react";
import { Rating } from "flowbite-react";
import { FaRupeeSign } from "react-icons/fa";
import OtherBooks from '../home/OtherBooks';


const SingleBook = () => {
  const { _id, bookTitle, imageURL, authorName, bookDescription } = useLoaderData();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div className='mt-28 px-4 lg:px-24'>
        <div className='flex gap-28'>
          <div className="left flex-col gap-10">
            <img src={imageURL} alt='' className='h-96 mb-10' />
            <Button className='w-[200px]' gradientMonochrome="success">Want To Read</Button>
          </div>
          <div className="right">
            <h1 className='text-4xl font-bold'>{bookTitle}</h1>
            <h2 className='text-xl font-medium mt-5'><span className='text-2xl underline'>Author: </span> {authorName}</h2>
            <Rating className='mt-5'>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
            </Rating>
            <div className="price flex mt-5">
              <FaRupeeSign />
              <span className='text-2xl font-medium'>399</span>
              <span className='text-2xl font-extralight line-through ml-5'>599</span>
              <span className='text-xl text-green-300 ml-5'>60% off you save 300</span>
            </div>
            <div className="discription">
              <h2 className='text-xl font-medium mt-5'>Discription:</h2>
              <p>{bookDescription}</p>
            </div>
            <Button className='mt-8 w-1/2' color="blue">Buy Now</Button>
          </div>
        </div>
      </div>
      <OtherBooks />
    </>
  )
}

export default SingleBook