import React from 'react';
import Layout from '../../components/Layout/Layout';
import MovieList from '../../components/MovieList/MovieList';

import './home.scss';

export default function Home() {
    return (
        <Layout>
            <section className="section_movie-list">
                <MovieList />
            </section>
        </Layout>
    );
}
