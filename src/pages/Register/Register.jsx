import React from 'react';
import Layout from '../../components/Layout/Layout';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import './register.scss';

export default function Login() {
    return (
        <Layout>
            <section className="section_register">
                <RegisterForm />
            </section>
        </Layout>
    );
}
