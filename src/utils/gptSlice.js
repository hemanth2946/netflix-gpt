import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,

        movieNames: [],
        movieResults: [],

    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchResults: (state, action) => {
            console.log(action.payload, "payload in gpt slice")
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
})

export const { toggleGptSearchView, addGptSearchResults } = gptSlice.actions;

export default gptSlice.reducer;