 import React from 'react'
 import recent from '../assets/Recent-1.png'
 import profile from '../assets/profile-1.png'
 import star from '../assets/star.png'
 import {motion} from 'framer-motion';
 
function Recent({data}) {
    const {Reviwes} =data[2]
    

   return (
        <div className='container  mt-10 sm:mt-28'>
            <motion.h1
            initial ={{y:-80,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5,duration:1}}
             className='text-xl sm:text-3xl text-primary font-bold font-Inter mb-14 text-start lg:text-center'>Recent reviews</motion.h1>
            <div className='w-full'>
                <motion.div
                initial ={{y:100,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:0.5,duration:1}}
                 className='flex items-center justify-between flex-wrap gap-12 md:gap-6'>

                {
                    Reviwes.map(({heading,img,id,imgProfile,name,profession,ratingImg,ratingNum,result,text}) => {

                      return <div key={id} className='max-w-[361px] place-self-stretch'>
                            <div className='max-w-[361px] overflow-hidden rounded-md'>
                                <img className='transform hover:scale-110 transition delay-100 duration-200 ease-in-out' src={img} alt="fsdf" />
                            </div>
                            <div className='p-4'>
                                <h4 className='text-primary font-bold font-Inter text-base'>{heading}</h4>
                                <p className='text-secondary font-Inter text-sm'>{text}</p>
                                <div className='mt-5 flex items-center justify-between  '>
                                    <div className='flex items-center gap-3'>
                                        <img src={imgProfile} alt="profileImg" />
                                        <div className='space-y-1'>
                                            <h4 className='text-xs font-Inter font-bold text-primary '>{name}</h4>
                                            <span className='text-xs font-Inter text-secondary'>{profession}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img src={ratingImg} alt="" />
                                        <span className='font-Inter text-primary font-bold '>{ratingNum}</span>
                                        <span className='text-secondary text-xs'>{result}</span>
                                    </div>
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
 
 export default  Recent;