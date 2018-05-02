import React, { Component } from 'react';
import { MovieItem } from './MovieItem';

export class MoviesList extends Component {
    render() {
        return (
            <div className="movies-list">
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        )
    };
}