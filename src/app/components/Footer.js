"use client"
import React from 'react'

const Footer = () => {

     const handleScroll = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
   <>   
   <div className='w-full h-30 px-20 relative bottom-0 flex justify-between items-center after:content-[""] after:w-[80%] after:h-1 after:absolute after:bottom-5    '>
<div className='text-lg font-semibold'>
Kaustubha Saxena
</div>

<ul className='font-medium text-base flex justify-center items-center gap-4'>
   <li className='relative'> <button className=' after:content-[""] after after:w-20 after:h-1 after:absolute after:bottom-0 after:left-[25%]  '>
              Portfolio </button></li>
              <li>
                <button onClick={() => handleScroll('projects')}  className='hover:cursor-pointer'>Projects</button>
              </li>
              <li>
                <button onClick={() => handleScroll('about')}  className='hover:cursor-pointer'>About</button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')}  className='hover:cursor-pointer'>Contact</button>
              </li>
</ul>

<div className='w-full py-2 absolute bottom-0 left-0 bg-[#cecece] flex justify-center items-center text-sm'>
Copyright &copy; 2025 | All Rights Reserved
</div>
   </div>

   
   </>
  )
}

export default Footer
