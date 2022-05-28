import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesRepository from '../../repositories/movies';

export default function Movie() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const getMovie = async () => {
        const response = await moviesRepository.getById(id);
        setMovie(response[0]);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <article>
            <div>{movie.title}</div>
            {movie.description && <div>{movie.description}</div>}
        </article>
    );
}
