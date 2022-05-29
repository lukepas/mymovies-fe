import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_PATHS } from '../../constants/routes';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { logOut } from '../../store/reducers/user';

import './header.scss';

export default function Header() {
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const logoutUser = () => {
        dispatch(logOut());
        localStorage.removeItem('token');
    };

    return (
        <header className="header">
            <Link to={ROUTE_PATHS.DEFAULT}>
                <h3 className="header_logo">MyMovies 🎬</h3>
            </Link>
            {isUserLoggedIn && <div className="header_button-wrapper">
                <Button
                    text={BUTTON_TEXT.LOGOUT}
                    onClick={logoutUser}
                />
            </div>}
        </header>
    );
}
