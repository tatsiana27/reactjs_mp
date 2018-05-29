import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { parseReleaseDate } from '../helpers/parse-release-date';

import '../styles/movie-item.scss';
export function MovieItem(props) {
    return (

        <div className="movie-item">
            <img className="movie-item_image" src={props.image}/>
            <div className="movie-item_info">
                <Link to={`/movie-info/${props.id}`} className="movie-item_title"><div>{props.title}</div></Link>
                <div className="movie-item_release-date">{parseReleaseDate(props.releaseDate)}</div>
            </div>
            <div className="movie-item_genre">{props.genre}</div>
        </div>
    )
}
