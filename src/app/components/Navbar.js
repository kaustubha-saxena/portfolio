"use client"
import React from 'react'
import { motion } from "motion/react"
const Navbar = () => {
  return (
    <>
      <nav className='w-full h-fit  bg-amber-300 flex justify-center items-center'>

       

          <ul className='flex justify-center  items-center  absolute top-0 bg-black  gap-4 px-10 rounded-full py-1 overflow-hidden my-4 text-white z-99 font-medium text-base'>
            <li className='relative'> <button className=' after:content-[""] after after:w-20 after:h-1 after:absolute after:bottom-0 after:left-[25%]  '>
              Portfolio </button></li>
            <li className='hover:cursor-pointer'>Projects</li>
            <li className='hover:cursor-pointer'>About me</li>
            <li className='hover:cursor-pointer'>Contact</li>
          </ul>
      
      </nav>
    </>
  )
}

export default Navbar
