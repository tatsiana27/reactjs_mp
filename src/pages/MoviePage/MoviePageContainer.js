import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieById, fetchMovies } from '../../modules/movies';
import MoviePage from './MoviePage';

const mapStateToProps = (state, props) => ({
  movies: state.movies.item,
  movie: state.movies.current,
  loading: state.movies.loading,
  movieId: props.match.params.movieId,
  params: state.params,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovieById,
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
