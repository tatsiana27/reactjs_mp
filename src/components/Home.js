import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Layout';
import { Header } from './Header';
import { SearchBlock } from './SearchBlock';
import { InfoBlock } from './InfoBlock';
import { MoviesList } from './MoviesList';
import { connect } from 'react-redux';

export class Home extends Component {

    render() {
        // const { data: movies = [] } = this.props.movies;
        return (
            <Layout>
                <Header>
                    <SearchBlock/>
                </Header>
                <InfoBlock/>
                <MoviesList/>
            </Layout>
        )
    }
};

// PropTypes.defaultProps = {
//     movies: [],
// };
//
// PropTypes.propTypes = {
//     movies: PropTypes.array,
// };
//
// export const mapStateToProps = ({ movies }) => {
//     let displayedMovies = null;
//
//     return {
//         movies: Object.assign({}, movies, { data: displayedMovies }),
//     };
// };
//
// export const mapDispatchToProps = (dispatch) => ({
//     searchMovies: payload => searchMovies(dispatch, payload),
// });
//
// export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);