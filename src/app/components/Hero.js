"use client";
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TextType from './TextType';


const Hero = () => {

 const handleScroll = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

    return (
        <>
            {/* <SplashCursor/> */}

            <div className='w-full h-[100vh] bg-[#81827e] bg-[#eeeeee]   relative flex'>
               
                <div className='flex flex-col justify-center w-[50%] h-full  px-20 relative '>

                    <h1 className='text-7xl font-bold font-[Poppins] text-black'>Hi! I&apos;m</h1>
                    <h1 style={{ WebkitTextStroke: "1px black" }} className='text-9xl font-[Poppins] font-bold text-transparent  selection:text-green-600  '>Kaustubha</h1>
                    <TextType
                        text={["I build beautiful websites...", "I solve complex problems...", "I turn ideas into reality."]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='text-black text-4xl font-bold'
                    />
                    {/* <p className='w-full leading-8 text-xl font-semibold'>Helping businesses turn ideas into beautiful, results-driven websites.</p> */}
                    <div className='flex  pt-15 gap-5 w-full justify-center items-center text-xl font-bold'>

                        <button  onClick={() => handleScroll('contact')} className='px-6 text-xl font-bold py-3  border-1 bg-green-600 hover:cursor-pointer hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)] border-black shadow-[4px_4px_0px_0px_rgb(0,0,0,1)]'>Hire me</button>
                        <button  onClick={() => handleScroll('projects')} className='px-6 text-xl font-bold py-3 bg-transparent border-1 hover:cursor-pointer hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)] border-black shadow-[4px_4px_0px_0px_rgb(0,0,0,1)]'>View my work</button>
                    </div>
                </div>
                <div className='w-[50%] h-full '>
                    <DotLottieReact
                        src="https://lottie.host/2b0bdc0d-4092-437c-9a4e-ae1de72eea3d/MlgDvBpZx9.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </>
    )
}

export default Hero
