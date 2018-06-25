import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import styles from './MoviesPage.css';
import { Layout } from '../Layout';
import { Header } from '../../components/Header';
import SearchBlock from '../../components/SearchBlock';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';

class MoviesPage extends PureComponent {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.shape({}),
  };
  static defaultProps = {
    movies: {},
  };

  /**
   * componentWillMount was not useful for one-pass server rendering anyway
   * because it is synchronous so you can’t wait for the data.
   *
   * @link https://github.com/reactjs/reactjs.org/issues/727
   */
  componentWillMount() {
    this.props.fetchMovies(this.props.params);
  }

  // componentDidMount() {
  //   this.props.fetchMovies();
  // }

  render() {
    const { loading, movies, params } = this.props;

    //console.log('params', params);

    return (
      <Layout>
        <Loader loading={loading} />
        <Header>
          <SearchBlock params={params} movies={movies}/>
        </Header>
        <MoviesList movies={movies.data} />
      </Layout>
    );
  }
}

export default MoviesPage;
