import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import moviesReducer from './reducers/movies';

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});
