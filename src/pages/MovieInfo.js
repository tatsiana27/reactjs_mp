import React, { Component } from 'react';
import { Layout } from './Layout';
import { Header } from '../components/Header';
import { Movie } from '../components/Movie';
import { MoviesList } from '../components/MoviesList';

export class MovieInfo extends Component {

    render() {
        const movieId = this.props.match.params.id;
        return (
            <Layout>
                <Header>
                    <Movie id={movieId}/>
                </Header>
                <MoviesList/>
            </Layout>
        )
    }
};