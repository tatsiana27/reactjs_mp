import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movie.action';
import { parseReleaseDate } from '../helpers/parse-release-date';

import '../styles/movie.scss';

export class MovieUI extends Component {
    constructor(props) {
        super(props);
        const { searchMovie, id } = this.props;
        searchMovie(id);
    };

    render() {
        const { movie } = this.props;
        return (
            <div className="movie">

                <img className="movie_image" src={movie.poster_path}/>
                <div className="movie_info">
                    <div className="movie_title">{movie.title}
                        <span className="movie_vote">{movie.vote_average}</span>
                    </div>
                    <div className="movie_tagline">{movie.tagline}</div>
                    <div className="movie_additional-info">
                        <span className="movie_release-date">{parseReleaseDate(movie.release_date)}</span>
                        <span className="movie_runtime">{movie.runtime}</span>
                    </div>
                    <div className="movie_overview">{movie.overview}</div>
                </div>
                <Link to={'/'}><button className="search-btn">Search</button></Link>
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    movie: state.movie,
});

export const mapDispatchToProps = (dispatch) => ({
    searchMovie: payload => searchMovie(dispatch, payload),

});

export const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieUI);
