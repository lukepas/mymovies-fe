import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/reducers/user';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_PATHS } from '../../constants/routes';
import userServices from '../../repositories/user';

import './loginForm.scss';

export default function LoginForm() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await userServices.login(data);
        if (result.error) {
            return setError(result.error);
        }

        dispatch(logIn(result.accessToken));
        localStorage.setItem('token', result.accessToken);
        return navigate(ROUTE_PATHS.DEFAULT);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
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
                name="email"
                value={data.email}
                onChange={handleInputChange}
                required
            />
            <input
                className="login_form_input"
                type="password"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
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
