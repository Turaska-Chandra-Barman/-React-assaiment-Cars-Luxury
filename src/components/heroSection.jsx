  import React from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import Button from './Button';  
  import heroImg from '../assets/heroImage.png';
  import { motion } from 'framer-motion';

  function HeroSection({ data }) {
    const { heroSection } = data[3];

    const PrevArrow = ({ onClick }) => (
      <button
      style={{backgroundColor:'secondary',margin:"70px 200px",opacity:'0.3'}}
        className="slick-prev -z-[99999] w-7 h-7 "
        onClick={onClick}
        aria-label="Previous Slide"
      >
          &#10095; 
      </button>
    );

    const NextArrow = ({ onClick }) => (
      <button
      style={{backgroundColor:'secondary',margin:"70px 200px",opacity:'0.3'}}
        className="slick-next -z-[99999] w-7 h-7 "
        onClick={onClick}
        aria-label="Next Slide"
      >
        &#10094; 
      </button>
    );



    const settings = {
      dots: true ,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    
    };

    return (
      <>
        <div className="container mt-40 ">
          <Slider {...settings}>
          {heroSection.map(({id,exprience,name}) => {
          return<div key={id}>
              <div className="text-center overflow-hidden ">
                <motion.small
                  initial={{ y: -250, opacity: 0 }}
                  animate={{ y: 0,opacity:1}}
                  transition={{ delay: 0.5, duration: 1 }}
                className="text-base block  text-secondary">
                  {exprience}
                </motion.small>
      
                <motion.h1
                  initial={{ x: -250, opacity: 0 }}
                  animate={{ x: 0,opacity:1}}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="font-bold text-5xl sm:text-6xl drop-shadow-md text-primary mt-5 "
                >
                  {name} Civic Type R
                </motion.h1>
              </div>
              <div 
              className="flex items-center justify-center mt-12">
              
                <motion.div 
                initial ={{y:80,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:0.5,duration:1}}
                className="space-x-2">
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
                </motion.div>
              
              </div>
              </div>
            
          })}
          </Slider>
        </div>

        <motion.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className=" h-auto mx-auto mt-10 sm:mt-20  "
          src={heroImg}
          alt=""
        />

      </>
    );
  }

  export default HeroSection;
