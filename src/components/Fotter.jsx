import React from 'react'
import world from '../assets/world.png'
import doteson from '../assets/doteson.png'

 function Fotter() {
  return (
    <div className='container'>
        <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center  justify-between py-4'>

            <div className=' flex flex-col md:flex-row items-center justify-between gap-3 order-1  '>
                <span className='text-primary font-bold text-sm'>Privacy Policy</span>
                <span className='text-primary font-bold text-sm'>Term of Use</span>
                <span className='text-secondary text-sm '>© 2021 All rights reserved</span>
            </div>


            <div className='w-full md:w-auto flex items-center justify-between md:justify-end md:order-2 gap-3'>
              <div className='flex items-center justify-between   gap-2'>
              <img src={world} alt="world" />
              <span className='text-sm text-secondary font-bold '>English</span>
              </div>
                <div className='flex items-center gap-2'>
                <img src={doteson} alt="doteson" />
                <span className='text-sm text-secondary font-bold '>USD</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter;