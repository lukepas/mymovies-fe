import React from 'react';
import { Link } from 'react-router-dom';

import './tableRow.scss';

export default function TableRow({ list, reroutePath }) {
    if (!list || list.length === 0) {
        return (
            <tr className="table-row_empty">
                <td>Oh noes! Your list is empty 😢</td>
            </tr>
        );
    }

    return (
        <tr>
            {list.map((item) => (
                <td
                    className="table-row_text"
                    key={item.movie_id}
                >
                    <Link
                        to={`${reroutePath}${item.movie_id}`}
                    >
                        {item.title}
                    </Link>
                </td>
            ))}
        </tr>
    );
}
