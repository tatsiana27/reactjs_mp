import React from 'react';
import PropTypes from 'prop-types';

import { CommonComponent } from '../CommonComponent';
import './Header.scss';

export function Header({ children }) {
  return (
    <div className="header">
      <CommonComponent/>
      <div>{children}</div>
      <div className="overlay"></div>
    </div>
  );
}

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};
