import React from 'react'
import Crypto from "../bgimage/Crypto.png";

const Home = () => {
    return (
        <div className='relative h-screen bg-gradient-to-tr from-gray-700 via-gray-900 to-black'>
            <div className='absolute py-5 left-[30%]'>
                <h1 className='text-4xl font-extrabold font-signature text-yellow-300 cursor-pointer'> $ CRYPTOCURRENCY TRACKER $</h1>
            </div>
            <div className='absolute left-[40%] top-[15%]'>
                <img src={Crypto} alt="" className='w-[70%]' />
            </div>
            <div className='absolute top-[66%] left-[16%] right-[16%]'>
                
                <p className='text-gray-100 text-2xl mt-3 font-semibold font-writepara'>A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. This is a <u>Cryptocurrency Tracker</u> which monitors the current value of different digital currencies and tokens. <br />
                <br />
                Made by <u><a href="https://github.com/joyjeetcoding/Cryptocurrency-Tracker" target='_blank' rel="noreferrer" className='text-green-400 hover:text-yellow-500'> Joyjeet Mukherjee</a></u>, CSE dept., 2nd year
                </p>
            </div>
        </div>
    )
}

export default Home