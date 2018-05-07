import React, { Component } from 'react';

import './movie-item.scss';
export function MovieItem(props) {
    return (
        <div className="movie-item">
            <img className="movie-item_image" src={props.image}/>
            <div className="movie-item_info">
                <div className="movie-item_title">{props.title}</div>
                <div className="movie-item_release-date">{props.releaseDate}</div>
            </div>
            <div className="movie-item_genre">{props.genre}</div>
        </div>
    )
}
