import React from 'react'
import Button from './Button'
import ReactDOM from 'react-dom';



function Modal({getPortal,setPortal}) {

  function Portal(){
    setPortal(!getPortal);
  }

  return (
    ReactDOM.createPortal(
      <div onClick={() => setPortal(!getPortal)}  className={`fixed inset-0 bg-transparent/40  px-5 ${getPortal?'blcok':'hidden'}`}>
      <div className=' flex items-center h-screen justify-center'>

         <div onClick={(e) =>e.stopPropagation() }  className=' max-w-[500px] w-full bg-white  rounded-md min-h-[300px] flex flex-col justify-center px-5 py-3  '>
            <h1 className='text-xl capitalize font-Inter text-primary font-semibold tracking-wider mb-5'>please sing in</h1>
            <div className='flex items-start flex-col justify-center space-y-4 mb-5'>
                <input className=' border py-1 px-2 rounded-md focus:border-emerald-300 outline-none shadow-lg w-full' type="text" placeholder='input your name' />
                <input  className='border py-1 px-2 rounded-md focus:border-emerald-300 outline-none shadow-lg w-full' type="password" placeholder='input your password' />
            </div>
            <div className='border w-full border-zinc-200 '></div>
           
            
           <div className='flex items-center justify-end space-x-4 px-4 mt-4'>
           <Button Portal={Portal} normalStyle={'text-base md:text-xl lowercase font-semibold font-Inter px-5 py-1 rounded-md border bg-emerald-300 hover:bg-white transition delay-150 duration-300 ease-in-out  '} text={'sing in'}/>
           <Button Portal={Portal} text={'close'} normalStyle={'text-base md:text-xl lowercase font-semibold font-Inter px-5 py-1 rounded-md border bg-secondary/50 hover:bg-white transition delay-150 duration-300 ease-in-out  '}/>
           </div>
        </div>
      </div>
       
    </div>,
    document.getElementById('portal')
    )
  )
}

export default  Modal