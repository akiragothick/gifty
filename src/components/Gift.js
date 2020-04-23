import React from 'react';
import './Gift.css'

function Gift({ title, id, url }) {
    return (
        <a href={`#${id}`} className="Gift">
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url} />
        </a>
    );
}

export default Gift;