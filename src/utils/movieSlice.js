import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingVideos: null
    },
    reducer: {
        addNowPlayingVideos: (state, action) => {
            state.nowPlayingVideos = action.payload;
        }
    }

});

export const { addNowPlayingVideos } = movieSlice.actions;

export default movieSlice.reducer;