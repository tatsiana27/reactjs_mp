import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieById } from '../../modules/movies';
import MoviePage from './MoviePage';

const mapStateToProps = (state, props) => ({
  movie: state.movies.current,
  loading: state.movies.loading,
  movieId: props.match.params.movieId,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovieById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
