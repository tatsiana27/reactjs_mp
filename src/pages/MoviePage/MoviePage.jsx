// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import Loader from '../../components/Loader';
// import { Layout } from '../Layout';
// import Movie from '../../components/Movie';
// import { Link } from 'react-router-dom';
// import { parseReleaseDate } from '../../helpers/parse-release-date';
// import './MoviePage.scss';
//
// class MoviePage extends PureComponent {
//   static propTypes = {
//     fetchMovieById: PropTypes.func.isRequired,
//     movieId: PropTypes.string.isRequired,
//     loading: PropTypes.bool.isRequired,
//     // movie: PropTypes.shape({
//     //   id: PropTypes.number,
//     //   title: PropTypes.string,
//     // }),
//   };
//
//   // static defaultProps = {
//   //   movie: null,
//   // };
//
//   /**
//    * componentWillMount was not useful for one-pass server rendering anyway
//    * because it is synchronous so you can’t wait for the data.
//    *
//    * @link https://github.com/reactjs/reactjs.org/issues/727
//    */
//   componentWillMount() {
//     console.log('Hello', this.props.movieId)
//     this.props.fetchMovieById(this.props.movieId);
//   }
//
//   // componentDidMount() {
//   //   this.props.fetchMovieById(this.props.movieId);
//   // }
//
//   render() {
//
//     const { loading, movie } = this.props;
//     return ( <Layout>
//         <div className="movie">
//           <Loader loading={loading} />
//           <Movie item={movie} />
//           {/*<img className="movie_image" src={movie.poster_path}/>*/}
//           {/*<div className="movie_info">*/}
//             {/*<div className="movie_title">{movie.title}*/}
//               {/*<span className="movie_vote">{movie.vote_average}</span>*/}
//             {/*</div>*/}
//             {/*<div className="movie_tagline">{movie.tagline}</div>*/}
//             {/*<div className="movie_additional-info">*/}
//               {/*<span className="movie_release-date">{parseReleaseDate(movie.release_date)}</span>*/}
//               {/*<span className="movie_runtime">{movie.runtime}</span>*/}
//             {/*</div>*/}
//             {/*<div className="movie_overview">{movie.overview}</div>*/}
//           {/*</div>*/}
//           <Link to={'/'}><button className="search-btn">Search</button></Link>
//
//         </div>
//     </Layout>
//
//     );
//   }
// }
//
// export default MoviePage;


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Hello from '../../components/Hello';
import Loader from '../../components/Loader';
// import styles from './UserPage.css';

class MoviePage extends PureComponent {
  static propTypes = {
    fetchMovieById: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    movie: null,
  };

  /**
   * componentWillMount was not useful for one-pass server rendering anyway
   * because it is synchronous so you can’t wait for the data.
   *
   * @link https://github.com/reactjs/reactjs.org/issues/727
   */
  componentWillMount() {
    this.props.fetchMovieById(this.props.movieId);
  }

  // componentDidMount() {
  //   this.props.fetchMovieById(this.props.movieId);
  // }

  render() {
    const { loading, movie } = this.props;
      return ( movie && <div>
        <h2 className={movie.title}>{movie.title}</h2>

        <Loader loading={loading} />

      </div>
    );
  }
}

export default MoviePage;
