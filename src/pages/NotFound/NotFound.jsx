import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import { ROUTE_PATHS } from '../../constants/routes';
import { BUTTON_TEXT } from '../../constants/button';

export default function NotFound() {
    return (
        <Layout>
            <section>
                <h3 className="">Lost your way?</h3>
                <p className="">
                    Sorry, we can&apos;t find that page.
                    You&apos;ll find lots to expore on the home page.
                </p>
                <Link to={ROUTE_PATHS.DEFAULT}>
                    <Button text={BUTTON_TEXT.HOME} />
                </Link>
            </section>
        </Layout>
    );
}
