import React, { Component } from 'react';
import { Layout } from './Layout';
import { Header } from './Header';
import { SearchBlock } from './SearchBlock';
import { InfoBlock } from './InfoBlock';
import { MoviesList } from './MoviesList';

export class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <SearchBlock/>
                </Header>
                <InfoBlock/>
                <MoviesList />
            </Layout>
        )
    }
};