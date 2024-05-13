import React from 'react'
import { BACKGROUND_IMG } from '../../../utils/constants'
import GptSearchBar from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'

const GptSearch = () => {
    return (
        <div>
            <div className='-z-10 fixed'>
                <img className='h-screen object-cover md:w-screen' src={BACKGROUND_IMG} alt='Background' />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch