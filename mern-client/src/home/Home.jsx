import React from 'react'
import Banner from '../components/Banner'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import BestSellerBooks from './BestSellerBooks'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home 