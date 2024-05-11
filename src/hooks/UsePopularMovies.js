import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);


    const getPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const jsonRes = await res.json();
        dispatch(addPopularMovies(jsonRes.results));
    }

    useEffect(() => {
        // using memoization , when upCommingMovies are null in store,
        //  then only call function, if data is present dont call
        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;