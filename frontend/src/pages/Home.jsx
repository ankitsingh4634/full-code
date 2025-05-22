import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import TrendingCollection from '../components/TrendingCollection'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller index={0} index2={12}/>
      <BestSeller index={1} index2={0}/>
      <BestSeller index={2} index2={0}/>
      <BestSeller index={3} index2={0}/>
      <BestSeller index={4} index2={0}/>
      <BestSeller index={5} index2={0}/>
      <BestSeller index={6} index2={0}/>
      <BestSeller index={7} index2={0}/>
      <BestSeller index={8} index2={0}/>
      <BestSeller index={9} index2={0}/>
      <BestSeller index={10} index2={0}/>
      <BestSeller index={11} index2={0}/>
      <BestSeller index={12} index2={0}/>

      <OurPolicy/>
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home
