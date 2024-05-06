import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerId: null,
        popularMovies: null,
        topRatedMovies: null,
        upcommingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcommingMovies: (state, action) => {
            state.upcommingMovies = action.payload;
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerId, addPopularMovies, addTopRatedMovies, addUpcommingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;