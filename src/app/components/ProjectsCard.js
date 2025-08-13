import React from 'react'
import Link from 'next/link'
const ProjectsCard = () => {
  return (
   <>
   <div className='bg-[#dcdcdc] w-[50%] h-fit flex flex-col p-5 rounded-xl' >

    <div className=' bg-amber-300 w-full'>
<video autoPlay muted   loop  className='w-full' src="Video2.mp4"></video>
    </div>
    <div>
<h3 className='text-2xl font-bold pt-5'>Bookenplek- Your Online Book Store</h3>
<p className='text-sm py-2'>An intuitive online bookstore platform designed to make book discovery and purchasing seamless. Bookenplek features category-based browsing, best-seller highlights, and a clean cart/checkout experience. Built with React.js for a dynamic UI, styled for a modern and minimal feel, and powered by Node.js & Express for backend APIs. Integrated with responsive design principles to ensure a smooth experience across devices.</p>

<div className='w-full flex gap-2 justify-start items-center flex-wrap py-2'>
    <div className='rounded-full border-1 w-fit  px-3 '>React.js</div>
    <div className='rounded-full border-1 w-fit  px-3'>Next.js</div>
    <div className='rounded-full border-1 w-fit  px-3'>Tailwind CSS</div>
    <div className='rounded-full border-1 w-fit  px-3'>MongoDB</div>
</div>
    </div>
    <div className='flex gap-3 py-5 justify-start items-center'>

<Link href={"/"}>
<button className='px-3 rounded-lg border-1  shadow-[4px_4px_0px_0px_rgb(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)]  hover:cursor-pointer py-1 font-medium '>View Code</button>
</Link>
<Link href={"/"}>
<button className='px-3 rounded-lg border-1  shadow-[4px_4px_0px_0px_rgb(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)]  hover:cursor-pointer py-1 font-medium'>Visit</button>
</Link>


    </div>
   </div>
   </>
  )
}

export default ProjectsCard
