import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseReleaseDate } from '../../helpers/parse-release-date';

import './MovieHeader.scss';

const Movie = ({ movie }) => ( movie &&
  <div className="movie-item">

  </div>
);

Movie.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieHeader;
