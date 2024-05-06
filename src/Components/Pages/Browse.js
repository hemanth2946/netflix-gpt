import React from 'react'
import { Header } from '../Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import { MainContainer } from './Container/MainContainer';
import { SecondaryContainer } from './Container/SecondaryContainer';
import usePopularMovies from '../../hooks/UsePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpcommingMovies from '../../hooks/useUpcommingMovies';
import GptSearch from './GptSearch/GptSearch';
import { useSelector } from 'react-redux';

export const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcommingMovies();

    const showGptSearch = useSelector(store => store.gptSearch.showGptSearch)

    return (
        <div>
            <Header />

            {showGptSearch ? <GptSearch /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>}

            {/* 
                mainCointainer
                    -videoBackground
                    -videoTitle
                SecondaryContainer
                    -Movielist * n
                        - cards * n
            */}
        </div>
    )
}
