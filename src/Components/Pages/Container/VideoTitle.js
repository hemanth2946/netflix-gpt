import React from 'react'

export const VideoTitle = ({ title, description }) => {
    return (
        <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
            <h2 className='text-4xl font-bold py-5' >{title}</h2>
            <p className='w-1/4 text-lg'>{description}</p>
            <div className='mt-6'>
                <button className='py-3 px-9 mx-3 text-lg bg-white text-black  text-bold rounded-lg hover:opacity-80 '>Play</button>
                <button className='py-3 px-9  bg-gray-500 rounded-lg bg-opacity-50 text-white hover:opacity-50'>More info</button>
            </div>
        </div>
    )
}
