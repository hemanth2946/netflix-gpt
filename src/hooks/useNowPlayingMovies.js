import { useDispatch } from "react-redux";
import { addNowPlayingVideos } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const movieRes = res.json();
        console.log(movieRes.results);
        dispatch(addNowPlayingVideos(movieRes.results))
    }

    useEffect(() => {
        getMoviesData();
    }, []);
}

export default useNowPlayingMovies;