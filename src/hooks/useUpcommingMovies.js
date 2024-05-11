import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();
    const upCommingMovies = useSelector((store) => store.movies.upcommingMovies);

    const getUpcommingMovies = async () => {

        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const jsonRes = await res.json();
        // console.log(jsonRes, "upcomming movies")
        dispatch(addUpcommingMovies(jsonRes.results));

        // console.error("Error fetching upcomming movies");

    };

    useEffect(() => {
        // using memoization , when upCommingMovies are null in store,
        //  then only call function, if data is present dont call
        !upCommingMovies && getUpcommingMovies();
    }, [])
}

export default useUpcommingMovies;