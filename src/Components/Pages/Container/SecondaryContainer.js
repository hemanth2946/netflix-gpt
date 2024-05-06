import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

export const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcommingMovies = useSelector(store => store.movies?.upcommingMovies);
    return (
        <div className='bg-black'>
            <div className='-mt-40 relative z-40'>
                <MovieList title={"Now Playing Videos"} movies={nowPlayingMovies} />
                <MovieList title={"Top rated"} movies={topRatedMovies} />
                <MovieList title={"Popular"} movies={popularMovies} />
            </div>
            <MovieList title={"Upcomming"} movies={upcommingMovies} />
        </div>
    )
}
