import React from 'react'

const Contact = () => {
    return (

        <>
            <div className='w-full px-20 py-10' id='contact'  >
                <h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent pb-10  selection:text-green-600  '>Contact me</h2>
                <div>
<div className='text-lg font-medium leading-10' >
    
                    <h3>
                        Let’s Create Something Amazing Together!
                    </h3>
                   <p>

                    Whether you have a project in mind, a collaboration idea, or just want to say hi—my inbox is always open.
                   </p>
</div>

                    <div className='w-fit mx-auto mt-10 bg-[#dcdcdc] rounded-xl  px-10 py-5'>

                        <form action="" className='flex flex-col justify-center items-start gap-3 '>
                            <div className='flex flex-col'>

                                <label htmlFor="name" className=' font-semibold'>Name</label>
                                <input type="text" name="" id="name" placeholder='Name' className=' bg-[#fbf9f9] w-100  py-2 px-2 rounded-lg focus:border-none ' />
                            </div>
                            <div className='flex flex-col'>

                                <label htmlFor="email" className=' font-semibold'>Email</label>
                                <input type="email" name="" id="email" placeholder='Name' className='bg-[#fbf9f9] w-100  py-2 px-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>

                                <label htmlFor="message" className='font-semibold'>Message</label>
                                <textarea name="" id="message" className='bg-[#fbf9f9] w-100 py-2 px-2 rounded-lg' ></textarea>
                            </div>
                            
                            <div className=' flex justify-center items-center w-full'>
                                <input type="submit" value="Submit" className='px-6 rounded-xl font-medium py-2 bg-transparent border-1 hover:cursor-pointer hover:shadow-[1px_1px_0px_0px_rgb(0,0,0,1)] border-black shadow-[4px_4px_0px_0px_rgb(0,0,0,1)]' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Contact
