import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieItem } from './MovieItem';
import { EmptyResult } from './EmptyResult';

export class MoviesListUI extends Component {
    render() {
        const { data: movies = [] } = this.props.movies;
        return (
            <div className="movies-list">
                {movies.length > 0
                    ? movies.map(item =>
                        <MovieItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            genre={item.genres.join(' & ')}
                            image={item.poster_path}
                            releaseDate={item.release_date}
                        />)
                    : <EmptyResult/>
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