import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerId } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const jsonRes = await res.json();
        const filteredData = jsonRes.results?.filter((movie) => movie.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : jsonRes.results[0];
        dispatch(addTrailerId(trailer.key))
    }
    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;