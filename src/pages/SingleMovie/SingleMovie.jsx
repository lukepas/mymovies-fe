import React from 'react';
import Layout from '../../components/Layout/Layout';
import Movie from '../../components/Movie/Movie';

import './singleMovie.scss';

export default function SingleMovie() {
    return (
        <Layout>
            <section className="single-movie_section">
                <Movie />
            </section>
        </Layout>
    );
}
