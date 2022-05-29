import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REROUTE_PATHS } from '../../constants/routes';
import { setMoviesList } from '../../store/reducers/movies';
import TableRow from '../TableRow/TableRow';
import moviesRepository from '../../repositories/movies';

import './movieList.scss';

export default function MovieList() {
    const moviesList = useSelector((state) => state.movies.list);
    const dipatch = useDispatch();

    const authToken = localStorage.getItem('token');

    const getMoviesList = async () => {
        const response = await moviesRepository.getAll(authToken);
        dipatch(setMoviesList(response));
    };

    useEffect(() => {
        getMoviesList();
    }, []);

    return (
        <table className="table_movie-list">
            <thead>
                <tr>
                    <td className="table_movie-list_tile">Title</td>
                </tr>
            </thead>
            <tbody className="table_movie-list_body">
                <TableRow
                    list={moviesList}
                    reroutePath={REROUTE_PATHS.MOVIE}
                />
            </tbody>
        </table>
    );
}
