import React from 'react'
import Link from 'next/link'
const ProjectsCard = ({Project}) => {
    console.log(Project.name);
    
  return (
   <>
   <div className='bg-[#e9e9e9] w-[50%] h-full flex flex-col p-5 rounded-xl shadow-xl' >

    <div className=' bg-amber-300 w-full'>
<video autoPlay muted   loop  className='w-full' src="Video2.mp4"></video>
    </div>
    <div>
<h3 className='text-2xl font-bold pt-5'>{Project.name}</h3>
<p className='text-sm py-2 line-clamp-4'>{Project.description}</p>

<div className='w-full flex gap-2 justify-start items-center flex-wrap py-2'>
    {
        Project.tech.map(item=>(
<div key={item} className='rounded-full border-1 w-fit  px-3 bg-[#f3f3f3] border-none py-1 '>{item}</div>
        ))
    }
    
       
    

</div>
    </div>
    <div className='flex gap-3 py-5 justify-start items-center'>

<Link href={`${Project.code}`}>
<button className='px-3 rounded-lg border-1  hover:bg-[#333333]  hover:cursor-pointer py-1 font-medium bg-black text-white '>View Code</button>
</Link>
<Link href={`${Project.visit}`}>
<button className='px-3 rounded-lg border-1  hover:bg-[#333333]  hover:cursor-pointer py-1 font-medium bg-black text-white '>Visit</button>
</Link>



    </div>
   </div>
   </>
  )
}

export default ProjectsCard
