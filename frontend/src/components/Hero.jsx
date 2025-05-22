import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={"https://scontent.fixr3-3.fna.fbcdn.net/v/t1.6435-9/106480178_1246269082388575_4548496148698738443_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X_KI22DVoNcQ7kNvwHtKAOO&_nc_oc=AdkJoS_egOBbpl0Mrq5XOEsqyer_ypAWsyqgCWA5Ja8pwm0VmSteQCZ_3j4fhCg84k588N2PzgiDwlI29tVg1sBt&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=su-FqaBFDMrRREKFiZoHCQ&oh=00_AfHxSz0LY8Thbj5Lu5Za05Y5kVqMmuv1iXerWvKm85XZQg&oe=683855D5"} alt="" />
    </div>
  )
}

export default Hero
