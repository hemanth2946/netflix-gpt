import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerId } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerId = useSelector((store) => store.movies.trailerId);

    const getMovieVideos = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const jsonRes = await res.json();
        const filteredData = jsonRes.results?.filter((movie) => movie.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : jsonRes.results[0];
        dispatch(addTrailerId(trailer.key))
    }
    useEffect(() => {
        // using memoization , when upCommingMovies are null in store,
        //  then only call function, if data is present dont call
        !trailerId && getMovieVideos();
    }, [])
}

export default useMovieTrailer;