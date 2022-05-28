import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_PATHS } from '../../constants/routes';
import userServices from '../../repositories/user';

import './loginForm.scss';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await userServices.login(email);
        if (result.error) {
            setError(result.error);
        }
        console.log(result.error);
        console.log(email, password);
    };

    return (
        <form
            className="login_form"
            onSubmit={handleSubmit}
        >
            <p className="login_form_title">Sign in</p>
            <input
                className="login_form_input"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className="login_form_input"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className="login_error">{error}</p>}
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
