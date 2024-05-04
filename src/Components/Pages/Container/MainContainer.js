import React from 'react'
import { useSelector } from 'react-redux';
import { VideoTitle } from './VideoTitle';

export const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    //    if movies === null then return
    if (!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const { original_title, overview } = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
        </div>
    )
}