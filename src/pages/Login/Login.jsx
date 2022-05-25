import React from 'react';
import Layout from '../../components/Layout/Layout';
import LoginForm from '../../components/LoginForm/LoginForm';

import './login.scss';

export default function Login() {
    return (
        <Layout>
            <section className="section_login">
                <LoginForm />
            </section>
        </Layout>
    );
}
