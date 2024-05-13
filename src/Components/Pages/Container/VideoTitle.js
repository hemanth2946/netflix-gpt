import React from 'react'

export const VideoTitle = ({ title, description }) => {
    return (
        <div className='pt-[20%] md:pt-[25%] px-5 md:px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
            <h2 className=' text-lg md:text-4xl font-bold mt-10 md:mt-0 md:py-5' >{title}</h2>
            <p className=' hidden md:inline-block w-1/2 text-lg'>{description}</p>
            <div className='mt-2 md:mt-6'>
                <button className='py-1 px-2 md:py-3 md:px-9 md:mx-3 text-lg bg-white text-black  text-bold rounded-lg hover:opacity-80 '>Play</button>
                <button className='hidden md:inline-block py-3 px-9  bg-gray-500 rounded-lg bg-opacity-50 text-white hover:opacity-50'>More info</button>
            </div>
        </div>
    )
}
