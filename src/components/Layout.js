import React from 'react';
import { Header, Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
    return (
        <Container>
            <Header className="h1">
                netflixroulette
            </Header>

            {children}

        </Container>
    );
};

export default Layout;