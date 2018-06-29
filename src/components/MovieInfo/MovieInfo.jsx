import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseReleaseDate } from '../../helpers/parse-release-date';

import './MovieInfo.scss';

const MovieInfo = ({ movie }) => (
  <div className="movie">
    <img className="movie_image" src={movie.poster_path}/>
    <div className="movie_info">
      <div className="movie_title">{movie.title}
        <span className="movie_vote">{movie.vote_average}</span>
      </div>
      <div className="movie_tagline">{movie.tagline}</div>
      <div className="movie_additional-info">
        <span className="movie_release-date">{parseReleaseDate(movie.release_date)}</span>
        <span className="movie_runtime">{movie.runtime ? movie.runtime + 'min' : ''}</span>
      </div>
      <div className="movie_overview">{movie.overview}</div>
    </div>
    <Link to={'/'}><button className="search-btn">Search</button></Link>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieInfo;
