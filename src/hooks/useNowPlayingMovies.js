import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getMoviesData = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const movieRes = await res.json();
        // console.log(movieRes.results);
        dispatch(addNowPlayingMovies(movieRes.results))
    }

    useEffect(() => {
        // using memoization , when upCommingMovies are null in store,
        //  then only call function, if data is present dont call
        !nowPlayingMovies && getMoviesData();
    }, []);
}

export default useNowPlayingMovies;