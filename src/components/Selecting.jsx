import React, { useState } from 'react'
import searchimg from '../assets/search.png'
import down from '../assets/down.png'
import OptionList  from './OptionaList'
import Button from './Button'
import { motion } from 'framer-motion';



function Selcting() {
   const array =[
    { 
      used:['Used Card','Dao BMW Motors','Dao Bavarian Autos','Dao Luxury Rides','Dao BMW Select','Dao Ultimate Driving'],
      infiniti:['Infiniti','Dao Infiniti Motors','Dao Luxury Infiniti','Dao Infiniti Collection','Dao Infiniti Select','Dao Infiniti Autos'],
      year:['Year','1916 - Founded','1923 - R32 motorcycle','1928 - 3/15 car','1936 - 328 sports car','1972 - 5 Series'],
      modal:['Modal','BMW R32 ','BMW 3/15 ','BMW 328','BMW 501','BMW 1500'],
      price:['Price','3 Series: $30k - $60k','5 Series: $50k - $90k','7 Series: $85k - $150k','X3: $45k - $70k','X5: $60k - $90k'],
      
    }

  ]
  const[getdata,setdata] = useState(array);
  const{used,infiniti,year,modal,price,search} = getdata[0]


  

  return (
    <div className='container mb-20  h:auto xl:h-[82px]'>
      <div className='max-w-[950px] mx-auto h-full mt-8 md:mt-20' >
      <motion.h1
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0,opacity:1}}
      transition={{ delay: 0.5, duration: 1 }}
       className='text-center text-xl md:text-3xl font-bold font-Inter mb-10'>Which vehicles you are looking for? </motion.h1>
      <div className='mx-auto bg-white shadow-md rounded-md grid grid-cols-12 p-5 h-full  gap-5 xl:gap-0'>
      <OptionList array={used}/>
      <OptionList array={infiniti}/>
      <OptionList position={'items-start'} array={year}/>
      <OptionList position={'items-end'} array={modal}/>
      <OptionList position={'items-center'} array={price}/>
      <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2 self-center  '>
        <Button normalStyle={'flex items-center w-full h-[60px] xl:h-auto xl:w-auto justify-center bg-accenColor px-6 text-sm border-none outline-none bold text-white gap-2  py-2 rounded-md'} text={'Search'} img={<img src={searchimg} alt="search" />}/>
      </div>

        </div>
    </div>
    </div>
  )
}


export default Selcting;