import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './layout.scss';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </>
    );
}
