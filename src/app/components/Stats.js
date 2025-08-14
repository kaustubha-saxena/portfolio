import React from 'react'
import CountUp from './UICompoents/Countup'
const Stats = () => {
    return (
        <>
            <div className='w-full h-50  flex justify-around items-center'>
                <div className='flex flex-col justify-center items-center  '>
                    <h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent  selection:text-green-600  '>   <CountUp
                            from={0}
                            to={120}
                            separator=""
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+</h2>
                    <p className='text-3xl font-bold'>Sleepless nights survived</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent  selection:text-green-600  '>   <CountUp
                            from={0}
                            to={300}
                            separator=""
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+</h2>
                    <p className='text-3xl font-bold'>Deadlines Defeated</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h2 style={{ WebkitTextStroke: "1px black" }} className='text-7xl font-[Poppins] font-bold text-transparent  selection:text-green-600  '>
                        <CountUp
                            from={0}
                            to={1000}
                            separator=""
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+</h2>
                    <p className='text-3xl font-bold'>Cups of coffee</p>
                </div>

            </div>
        </>
    )
}

export default Stats
