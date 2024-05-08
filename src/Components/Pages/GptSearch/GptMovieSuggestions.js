import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../Container/MovieList'

export const GptMovieSuggestions = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { movieNames, movieResults } = useSelector((store) => store.gptSearch)

    useEffect(() => {
        if (movieNames && movieResults) {
            setIsLoading(false);
            console.log(movieNames, movieResults, "getData value changed")
        }
    }, [movieNames])

    if (isLoading) { return <div className='text-white'>Loading .....</div> }

    // console.log(gptData, "data of gpt in recommendations")

    return (
        <div className='p-4 m-4 bg-black text-white opacity-85'>
            <div>
                {
                    movieNames.map((name, index) =>
                        <MovieList key={name} title={name} movies={movieResults[index]} />
                    )
                }
            </div>
        </div>
    )
}
