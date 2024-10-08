import React from 'react'
import { motion } from 'framer-motion';

 function Explore({data}) {
    const {Explore} = data[1];

    
  return (
        <div className='container mt-10 sm:mt-28 mb-5'>
            
                <div className='max-w-[950px] mx-auto '>
                <motion.h1 
                initial ={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{delay:0.5,duration:1}}
                className='text-xl   sm:text-3xl text-primary font-bold font-Inter mb-16 text-start lg:text-center'>Explore best selling car makes</motion.h1>
                <motion.div
                   initial ={{y:-100,opacity:0}}
                   animate={{y:0,opacity:1}}
                   transition={{delay:0.5,duration:1}}
                className='grid grid-cols-12 gap-6'>
                {
                    Explore.map(({img,heading,text,id}) => {
                        // console.log(items)
                    
                return <div key={id} className='col-span-6 md:col-span-4'>
                <div key={id} className='flex items-center gap-8'>
                    <img className='w-[30px] sm:w-auto' src={img} alt="explore" />
                    <div>
                        <h3 className=' text-primary text-xs sm:text-[18px] font-Inter font-bold '>{heading}</h3>
                        <small className='text-secondary text-xs  sm:text-[18px] font-Inter '>{text}</small>
                    </div>
                </div>
                </div>
   
                    })
                }
                </motion.div>

                </div>
      

        </div>
  )
}


export default Explore;