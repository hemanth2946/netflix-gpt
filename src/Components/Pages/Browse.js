import React from 'react'
import { Header } from '../Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import { MainContainer } from './Container/MainContainer';
import { SecondaryContainer } from './Container/SecondaryContainer';

export const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />

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
