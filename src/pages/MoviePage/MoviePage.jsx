import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../Layout';
import { Header } from '../../components/Header';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';

class MoviePage extends Component {
  static propTypes = {
    fetchMovieById: PropTypes.func.isRequired,
    movies: PropTypes.shape({}).isRequired,
    movieId: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    movie: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    movie: {},
    movies: {},
  };

  /**
   * componentWillMount was not useful for one-pass server rendering anyway
   * because it is synchronous so you can’t wait for the data.
   *
   * @link https://github.com/reactjs/reactjs.org/issues/727
   */
  componentWillMount() {
    this.props.fetchMovieById(this.props.movieId);
    this.props.fetchMovies(this.props.params);
  }

  render() {
    const { loading, movie } = this.props;
      return ( movie &&
        <Layout>
          <Loader loading={loading} />
          <Header>
            <MovieInfo movie={movie}/>
          </Header>
          <MoviesList />
        </Layout>
    );
  }
}

export default MoviePage;
