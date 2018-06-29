import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../../modules/movies';
import { bindActionCreators } from 'redux';

import Movie from '../Movie';
import EmptyResult from '../EmptyResult';


class MoviesList extends Component {

  render () {
    const { movies } = this.props;
    return (
    <div className="movies-list">
      {movies.data
        ? movies.data.map(item => (
        <Movie item={item} key={item.id} />
      ))
        : <EmptyResult/>
      }
    </div>
    )
  }
};

MoviesList.propTypes = {
  movies: PropTypes.PropTypes.shape({}).isRequired,
  genre: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: {}
};
const mapStateToProps = state => ({
  movies: state.movies.items,
  params: state.params,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
