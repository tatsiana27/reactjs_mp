import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseReleaseDate } from '../../helpers/parse-release-date';

import './Movie.scss';

const Movie = ({ item }) => (
  <div className="movie-item">
    <img className="movie-item_image" src={item.poster_path}/>
    <div className="movie-item_info">
      <Link to={`/movies/${item.id}`} className="movie-item_title"><div>{item.title}</div></Link>
      <div className="movie-item_release-date">{parseReleaseDate(item.release_date)}</div>
    </div>
    <div className="movie-item_genre">{item.genres.join(' & ')}</div>
  </div>
);

Movie.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
