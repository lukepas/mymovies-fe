import React from 'react';
import dateService from '../../services/date';

import './footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">{`All rights reserved © Lorem Ipsum ${dateService.currentYear}`}</p>
        </footer>
    );
}
