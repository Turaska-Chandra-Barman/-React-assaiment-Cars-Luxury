import React from 'react'
import Img from '../assets/Map.png'

function Vechiles() {
  return (
    <div className='lg:relative '>
        <h1 className='px-10 lg:absolute  lg:left-1/2 lg:-translate-x-1/2 text-start lg:text-center font-Inter text-xl sm:text-3xl text-primary font-bold mt-20 '>Find vehicles near you</h1>
        <img className='w-full h-auto' src={Img} alt="sdfgdfgdf" />
    </div>
  )
}


export default  Vechiles;