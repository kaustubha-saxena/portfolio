import React from 'react'

const About = () => {
  return (
    <>
    <div className='w-full px-20 py-10' id='about' >
<h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent pb-10  selection:text-green-600  '>About me</h2>
    <div className='text-lg font-medium leading-10' >

    I&apos;m Kaustubha Saxena, a B.Tech student at MIT Manipal, major in Information Technology, with a passion for web development and scalable technologies. Proficient in  <span className='text-green-600 font-semibold text-xl'>Java, JavaScript ,Python, React.js, Next.js, Node.js, and cloud services like AWS and Docker.</span> Always eager to expand my skills and tackle new challenges, I&apos;m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it&apos;s through creating seamless web experiences or exploring the future of decentralized applications, I&apos;m excited to contribute to the tech landscape and grow alongside it.
    </div>
    </div>
    <div className='w-full flex justify-center items-center'>

                <button className='px-6 text-xl font-bold py-3 bg-transparent border-1 hover:cursor-pointer hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)] border-black shadow-[4px_4px_0px_0px_rgb(0,0,0,1)]'><a href="" download={"Kaustubha Saxena Resume.pdf"} >Download Resume</a></button>
    </div>

    </>
  )
}

export default About
