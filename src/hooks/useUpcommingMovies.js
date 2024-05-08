import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();

    const getUpcommingMovies = async () => {

        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const jsonRes = await res.json();
        // console.log(jsonRes, "upcomming movies")
        dispatch(addUpcommingMovies(jsonRes.results));

        // console.error("Error fetching upcomming movies");

    };

    useEffect(() => {
        getUpcommingMovies();
    }, [])
}

export default useUpcommingMovies;