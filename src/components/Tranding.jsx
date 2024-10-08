
import Button from './Button';
import { delay, motion } from 'framer-motion';

function Tranding({ data }) {
  const { tranding } = data[0];
  return (
    <div className="container mt-12 sm:mt-44 ">
      <motion.h1
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:0.5,duration:1}}
       className=" text-start lg:text-center text-primary font-bold font-Inter text-xl sm:text-3xl mb-14">
        Trending near you
      </motion.h1>
      <motion.div 
      initial={{y:-80,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{delay:0.5,duration:1}}
      className='flex flex-wrap items-center justify-between gap-6'>
        {tranding.map(
          ({ selar, price, miles, img, id, heading, cylinder, awd }) => {
            return (
              <div key={id} className="card">
                <div className='max-w-[361px] overflow-hidden rounded-md'>
                <img className='transform hover:scale-110 transition duration-150 delay-100 ease-in-out' src={img} alt="" />

                </div>
                <div className="px-5 mt-2">
                  <h4 className="font-Inter font-bold text-base text-primary">
                    {heading}
                  </h4>
                  <span className="font-Inter text-sm text-secondary mt-1">
                    {miles}
                  </span>
                  <div className="flex items-center  gap-2 text-secondary mb-4">
                    <span>{awd}</span>
                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                    <span>{cylinder}</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <Button
                      normalStyle={`px-5 py-1 rounded-md bg-accenColor/25 text-accenColor font-bold`}
                      text={price}
                    />
                    <Button
                      normalStyle={`px-5 py-1 rounded-md bg-btn text-secondary font-bold`}
                      text={selar}
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

export default Tranding;
