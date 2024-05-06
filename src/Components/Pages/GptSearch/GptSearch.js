import React from 'react'
import { BACKGROUND_IMG } from '../../../utils/constants'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
    return (
        <div>
            <div className='-z-10 absolute'>
                <img src={BACKGROUND_IMG} alt='Background' />
            </div>
            <GptSearchBar />
        </div>
    )
}

export default GptSearch