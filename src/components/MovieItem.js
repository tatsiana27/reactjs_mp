import React, { Component } from 'react';

export class MovieItem extends Component {
    render() {
        return (
            <div className="movie-item">
                <img src=""/>
                <p className="movie-title"></p>
                <div className="release-date"></div>
                <div className="movie-genre"></div>
            </div>
        )
    };
}
