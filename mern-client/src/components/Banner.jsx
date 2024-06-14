import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
     <div className='px-4 lg:px-24 bg-teal-100 flex item-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left side */}
            <div className='md:w-1/2 space-y-8 h-full '>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='w-4/5'>Welcome to our book buy and sell website, where stories come to find new homes and book lovers unite! Whether you're looking to declutter your shelves or searching for your next literary adventure, our platform offers a convenient and vibrant marketplace for buying and selling books. </p>
                <div>
                    <input type='search' name='search' id='search' placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'></input>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* Right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
     </div>
  )
}

export default Banner