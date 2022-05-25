import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants/routes';

import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <Link to={ROUTE_PATHS.DEFAULT}>
                <h3 className="header_logo">MyMovies 🎬</h3>
            </Link>
        </header>
    );
}
