import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

export const moviesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMoviesList: (state, action) => ({
            ...state,
            list: action.payload,
        }),
    },
});

export const { setMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
