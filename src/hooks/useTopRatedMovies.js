import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);


    const getTopRatedMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const jsonRes = await res.json();
        dispatch(addTopRatedMovies(jsonRes.results));
    };

    useEffect(() => {
        // using memoization , when upCommingMovies are null in store,
        //  then only call function, if data is present dont call
        !topRatedMovies && getTopRatedMovies();
    }, [])

}

export default useTopRatedMovies;