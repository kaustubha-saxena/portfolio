import React from 'react'
import ProjectsCard from './ProjectsCard'
import { projects } from '../../../Projects'
const Projects = () => {
  return (
    <>
    <div className='w-full px-20' id='projects'>
<h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent  selection:text-green-600  '>Projects</h2>
<div className='flex gap-3 py-8'>



{ 

  projects.map(item =>(
     <ProjectsCard key={item.name} Project={item}/>
  ))
}
</div>
    </div>
    </>
  )
}

export default Projects
