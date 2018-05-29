import React, { Component } from 'react';
import { Layout } from './Layout';
import { Header } from '../components/Header';
import { SearchBlock } from '../components/SearchBlock';
import { InfoBlock } from '../components/InfoBlock';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {

    render() {
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
