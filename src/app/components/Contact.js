"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Contact = () => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setform((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));


    }
    const handleSubmit = async () => {
        const res = await fetch('/api/form', {
            method: 'POST',
            headers: {
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message,
            },
            body: JSON.stringify({ message: "abcdefghijklmnopqrstuvwxyz" }),
        });

    }

    const [form, setform] = useState({ name: "", email: "", phone: "", message: "" })
    return (

        <>
            <div className='w-full px-20 py-10' id='contact'  >
                <h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent  pb-5 selection:text-green-600  '>Contact me</h2>
                <div className='flex justify-center items-center gap-10 '>
                    <div className='w-[40%]'>

                        <div className='text-xl font-medium leading-10 text-center' >

                            <h3>
                                Let’s Create Something Amazing Together!
                            </h3>
                            <p>
                                Whether you have a project in mind, a collaboration idea, or just want to say hi — my inbox is always open.
                            </p>
                        </div>
                        <div className='pt-10 font-semibold text-center leading-10'>
                            <p>Email: kaustubhsaxena@gmail.com</p>
                            <p>Phone: +91 9555331875</p>
                        </div>
                        <div className='flex gap-5 justify-center items-center py-5'>
                            <Link href={"https://x.com/KaustubhaSaxena"}> <img className='w-[40px] hover:translate-y-[-5px] transition-transform ' src="x.webp" alt="" /></Link>
                            <Link href={"https://www.linkedin.com/in/kaustubha-saxena/"}><img className='w-[40px] hover:translate-y-[-5px] transition-transform ' src="linkedin.webp" alt="" /></Link>
                            <Link href={"https://github.com/kaustubha-saxena"}><img className='w-[40px] hover:translate-y-[-5px] transition-transform ' src="github.webp" alt="" /></Link>
                            <Link href={"https://www.instagram.com/kaustubha.saxena/"}><img className='w-[40px] hover:translate-y-[-5px] transition-transform ' src="instagram.webp" alt="" /></Link>
                        </div>
                    </div>
                    <div className='w-[50%] flex justify-center items-center px-10 '>

                        <div className='w-fit  bg-[#dcdcdc] rounded-xl  px-10 py-5'>

                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-3 '>
                                <div className='flex flex-col'>

                                    <label htmlFor="name" className=' font-semibold'>Name</label>
                                    <input type="text" value={form.name} onChange={handleChange} required name="" id="name" placeholder='Name' className=' bg-[#fbf9f9] w-100  py-2 px-2 rounded-lg focus:border-none ' />
                                </div>
                                <div className='flex flex-col'>

                                    <label htmlFor="email" required className=' font-semibold'>Email</label>
                                    <input type="email" name="" value={form.email} onChange={handleChange} id="email" placeholder='Name' className='bg-[#fbf9f9] w-100  py-2 px-2 rounded-lg' />
                                </div>
                                <div className='flex flex-col'>

                                    <label htmlFor="phone" required className=' font-semibold'>Phone</label>
                                    <input type="text" name="" value={form.phone} onChange={handleChange} id="phone" placeholder='Phone Number' className='bg-[#fbf9f9] w-100  py-2 px-2 rounded-lg' />
                                </div>
                                <div className='flex flex-col'>

                                    <label htmlFor="message" className='font-semibold'>Message</label>
                                    <textarea name="" id="message" value={form.message} onChange={handleChange} className='bg-[#fbf9f9] w-100 py-2 px-2 rounded-lg' ></textarea>
                                </div>

                                <div className=' flex justify-center items-center w-full'>
                                    <input type="submit" value="Submit" className='px-3 rounded-lg border-1  hover:bg-[#333333]  hover:cursor-pointer py-1 font-medium bg-black text-white ' />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Contact
