import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import { CommonComponent } from '../../components/CommonComponent';
import './Layout.scss';

export function Layout({ children }) {
  return (
    <Container>
      {children}
      <CommonComponent/>
    </Container>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
