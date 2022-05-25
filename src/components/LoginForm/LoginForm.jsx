import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_PATHS } from '../../constants/routes';

import './loginForm.scss';

export default function LoginForm() {
    return (
        <form className="login_form">
            <input
                className="login_form_input"
                type="text"
                placeholder="username"
                required
            />
            <input
                className="login_form_input"
                type="password"
                placeholder="password"
                required
            />
            <div className="login_button_wrapper">
                <Button
                    type="submit"
                    text={BUTTON_TEXT.SIGN_IN}
                />
            </div>
            <p className="login_register">
                Don&#39;t have an account?
                <Link to={ROUTE_PATHS.REGISTER}>
                    <span className="login_register_span"> Register!</span>
                </Link>
            </p>
        </form>
    );
}
