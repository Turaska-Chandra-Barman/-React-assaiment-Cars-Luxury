import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';


 function Crasoual() {

   
  return (
    <div className="container mt-20 ">
   
      <div>
  <div className="text-center  ">
    <motion.small
       initial={{ y: -250, opacity: 0 }}
       animate={{ y: 0,opacity:1}}
       transition={{ delay: 0.5, duration: 1 }}
     className="text-base block  text-secondary">
      Meet your new car
    </motion.small>

    <motion.h1
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0,opacity:1}}
      transition={{ delay: 0.5, duration: 1 }}
      className="font-bold text-6xl drop-shadow-md text-primary mt-5 "
    >
      Honda Civic Type R
    </motion.h1>
  </div>
  <div className="flex items-center justify-between mt-12">
    
    <div className="space-x-2">
      <Button
        text={'More Details'}
        normalStyle={
          'bg-btn px-5 py-2 text-secondary rounded-md font-Inter font-bold text-sm '
        }
      />
      <Button
        text={'Test Drive'}
        normalStyle={
          'bg-accenColor px-5 py-2 text-white  rounded-md font-Inter font-bold text-sm'
        }
      />
    </div>
   
  </div>

  </div>

 

  {/* heroImag  */}
</div >
  )
}



export default Crasoual
