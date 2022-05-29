import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_PATHS } from '../../constants/routes';
import userServices from '../../repositories/user';

import './RegisterForm.scss';

export default function RegisterForm() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await userServices.register(data);

        if (!result.ok) {
            return setErrorMessage(result.message);
        }

        setSuccessMessage(result.message);
        return setTimeout(() => {
            navigate(ROUTE_PATHS.LOGIN);
        }, 1500);
    };

    return (
        <form
            className="register_form"
            onSubmit={handleSubmit}
        >
            {successMessage
                ? <p className="register_success-message">{successMessage}</p>
                : <>
                    <p className="register_form_title">Register</p>
                    <input
                        className="register_form_input"
                        type="text"
                        placeholder="name"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="register_form_input"
                        type="email"
                        name="email"
                        placeholder="email"
                        value={data.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="login_form_input"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={data.password}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="register_form_input"
                        type="password"
                        name="password2"
                        placeholder="password"
                        value={data.password2}
                        onChange={handleInputChange}
                        required
                    />
                    {errorMessage && <p className="register_error">{errorMessage}</p>}
                    <div className="register_button_wrapper">
                        <Button
                            type="submit"
                            text={BUTTON_TEXT.REGISTER}
                        />
                    </div>
                    <p className="register_login">
                        Already have an account?
                        <Link to={ROUTE_PATHS.LOGIN}>
                            <span className="register_login_span"> Login!</span>
                        </Link>
                    </p>
                </>}
        </form>
    );
}
