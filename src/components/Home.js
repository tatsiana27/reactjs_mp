import React, { Component } from 'react';
import { SearchBlock } from './SearchBlock';
import { MoviesList } from './MoviesList';
import { Header } from './Header';
import  Layout from './Layout';

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <SearchBlock/>
                </Header>
                <MoviesList />
            </Layout>
        )
    }
};

export default Home;