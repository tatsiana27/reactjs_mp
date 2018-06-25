import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';
import EmptyResult from '../EmptyResult';

const MoviesList = ({ movies }) => (
  <div className="movies-list">
    {movies
      ? movies.map(item => (
        <Movie item={item} key={item.id} />
      ))
      : <EmptyResult/>
    }
  </div>

);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.number.isRequired,
    // title: PropTypes.string.isRequired,
  })).isRequired,
};



export default MoviesList;
