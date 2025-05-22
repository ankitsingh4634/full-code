import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Our business, Steve's Blankets, is built on the principles of comfort and relaxation. We believe that everyone deserves a peaceful and cozy environment, and our blankets are designed to provide exactly that. We assure you that your experience with our products will be one of ultimate comfort and satisfaction.</p>
              <p>At Steve's Blankets, we prioritize your needs above all else. We understand that high-quality materials play a significant role in ensuring the comfort and durability of a blanket. That’s why we carefully choose the best fabrics to make sure you get the perfect product.</p>
              <b className='text-gray-800'>Our Wide Range</b>
              <p>Our wide range of selections is carefully curated to meet all your expectations. Whether you’re looking for something lightweight for warmer months or a thicker, cozier option for winter, we have the perfect blanket for every season and every need.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      {/* <NewsletterBox/> */}
      
    </div>
  )
}

export default About
