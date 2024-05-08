import React from 'react'
import { CDN_IMAGE_URL } from '../../../utils/constants'

const MovieCard = ({ moviePoster }) => {
    if (!moviePoster) return null
    return (
        <div className='pr-2 w-40 flex-shrink-0'>
            <img alt='movie poster'
                src={CDN_IMAGE_URL + moviePoster}
            />
        </div>
    )
}

export default MovieCard