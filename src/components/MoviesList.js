import React, { Component } from 'react';
import { MovieItem } from './MovieItem';

import { MOVIES } from '../data/data'

export class MoviesList extends Component {
    render() {
        return (
            <div className="movies-list">
                {MOVIES.map(item =>
                    <MovieItem
                        key={item.id}
                        title={item.title}
                        genre={item.genre}
                        image={item.image}
                        releaseDate={item.releaseDate}
                    />)
                }
            </div>
        )
    };
}