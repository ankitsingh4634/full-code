import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} style={{width:"19rem"}} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
           
At Steve's Blankets, we are dedicated to providing comfort, quality, and style. Since our inception, we have committed to crafting blankets that offer warmth and relaxation. Our blankets are made with premium materials to ensure a long-lasting, cozy experience. Whether you're snuggling up on a chilly evening or looking to add a touch of elegance to your living space, we have the perfect blanket for you.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>STEVE'S BLANKETS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 505-608-0606</li>
                <li>contact@stevesblankets.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@Steve's Blankets - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
