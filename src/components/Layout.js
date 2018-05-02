import React from 'react';
import { Container } from 'semantic-ui-react';

import { CommonComponent } from './CommonComponent';
import './layout.scss';

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
            <CommonComponent/>
        </Container>
    );
};

export default Layout;