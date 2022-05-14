import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    new: null,
    original: null,
    trending: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, { payload }) => {
            state.recommend = payload.recommend;
            state.new = payload.new;
            state.original = payload.original;
            state.trending = payload.trending;
        },
    },
})

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;