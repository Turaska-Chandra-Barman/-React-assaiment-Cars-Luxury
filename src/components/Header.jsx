import React, { useState } from 'react';
import img from '../assets/HeaderPng.png';
import pepole from '../assets/pepole.png'
import Modal from './Modal';
import { Link } from 'react-router-dom';

function Header() {
  
  const[getPortal,setPortal] = useState(false); 
  const[getMenu,setMenu] = useState(false); 

  return (
    <header className={`w-full py-7  fixed top-0 z-[9999] bg-white`}>  
      <div className=" container flex items-center justify-between relative ">
        <img src={img} alt="headerImg" />
        <nav className={`${getMenu ? 'block':'hidden'}  xl:block z-[9999] xl:z-0 w-[200px] md:w-[300px] rounded-t-md xl:w-auto fixed xl:static top-20  right-0  bottom-0 bg-custom-gradient transition delay-100 duration-300 ease-in-out ${getMenu ? 'block':'hidden'} xl:block`} >
          <ul className="  font-Inter text-primary text-sm md:text-xl  xl:text-base  font-semibold capitalize flex flex-col items-center  gap-7 mt-20 xl:mt-0  xl:flex-row xl:items-center xl:justify-between xl:gap-8  xl:bg-white">
            {[
              'used cars',
              'auctions',
              'new cars',
              'sel cars',
              'local dealers',
              'support',
            ].map((list, index) => {
              return (
                <li onClick={() => setMenu(!getMenu)} className='hover:bg-accenColor hover:text-white px-2 py-1 transition delay-150 duration-300 ease-in-out  rounded-md transform hover:scale-x-105' key={index}>
                  <Link to={'/'} href="#">{list}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='flex items-center justify-center space-x-5 relative '>
          <div className='flex items-center justify-center space-x-2'>
          <img src={pepole} className='bg-btn p-2 rounded-md' alt="" />
          <button onClick={() => setPortal(!getPortal)} className='semi-bold text-secondary text-sm font-Inter' > sing up</button>
         
          </div>
          <span onClick={(e) => {
            e.stopPropagation()
            setMenu(!getMenu)
          }} className="material-symbols-outlined text-2xl lg:text-3xl text-black/50 cursor-pointer xl:hidden ">menu</span>
        </div>
        <Modal getPortal={getPortal} setPortal={setPortal}/>
      </div>
    </header>
  );
}

export default Header;
