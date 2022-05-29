import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moviesRepository from '../../repositories/movies';

import './movies.scss';

export default function Movie() {
    const [movie, setMovie] = useState({});
    const authToken = localStorage.getItem('token') || useSelector((state) => state.user.authToken);
    const { id } = useParams();

    const getMovie = async () => {
        const response = await moviesRepository.getById(id, authToken);
        setMovie(response[0]);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <article className="movie_artcle-box">
            <div className="movie_artcle-title">{movie.title}</div>
            {movie.description && <div className="movie_artcle-description">
                {movie.description}
            </div>}
        </article>
    );
}
