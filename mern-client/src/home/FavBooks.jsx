import React from 'react'
import FavBooksImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBooks = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between item-center gap-12'>
            <div className='md:w-1/2 '>
                <img src={FavBooksImg} className='rounded md:w-10/12'></img>
            </div>
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
                <p className='mb-10 text-lg md:5/6'>From bestsellers to hidden gems, our diverse selection caters to all tastes and interests. With user-friendly browsing and secure transactions, you can explore, purchase, and list books with ease. Join our community of readers and sellers today, and let the pages of your favorite stories continue their journey into new hands!</p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
                </div>

                <Link to="/shop" className='mt-12 block'><button  className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    )
}

export default FavBooks
