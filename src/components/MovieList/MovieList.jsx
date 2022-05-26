import React, { useEffect, useState } from 'react';
import { REROUTE_PATHS } from '../../constants/routes';
import TableRow from '../TableRow/TableRow';
import moviesRepository from '../../repositories/movies';

import './movieList.scss';

export default function MovieList() {
    const [moviesList, setMoviesList] = useState([]);

    const getMoviesList = async () => {
        const response = await moviesRepository.getAll();
        setMoviesList(response);
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
            <tbody>
                <TableRow
                    list={moviesList}
                    reroutePath={REROUTE_PATHS.MOVIE}
                />
            </tbody>
        </table>
    );
}
