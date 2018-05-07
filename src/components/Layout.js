import React from 'react';
import { Container } from 'semantic-ui-react';

import { CommonComponent } from './CommonComponent';
import './layout.scss';

export function Layout({ children }) {
    return (
        <Container>
            {children}
            <CommonComponent/>
        </Container>
    );
};