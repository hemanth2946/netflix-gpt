import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const jsonRes = await res.json();
        dispatch(addPopularMovies(jsonRes.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;