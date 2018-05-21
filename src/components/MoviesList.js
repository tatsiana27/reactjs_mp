import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieItem } from './MovieItem';

import { MOVIES } from '../data/data'

export class MoviesListUI extends Component {
    // state = {
    //     movies: []
    // };
    render() {
        const { data: movies = [] } = this.props.movies;
            console.log(movies)
        return (
            <div className="movies-list">
                {movies.map(item =>
                    <MovieItem
                        key={item.id}
                        title={item.title}
                        genre={item.genre}
                        image={item.poster_path}
                        releaseDate={item.release_date}
                    />)
                }
            </div>
        )
    };
}

export const mapStateToProps = ({movies}) => {
    return {
        movies: movies,
    };

};

export const mapDispatchToProps = (dispatch) => ({});

export const MoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesListUI);