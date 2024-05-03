import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const movieRes = await res.json();
        console.log(movieRes.results);
        dispatch(addNowPlayingMovies(movieRes.results))
    }

    useEffect(() => {
        getMoviesData();
    }, []);
}

export default useNowPlayingMovies;