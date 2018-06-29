import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';

const Root = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <div>
        <Switch>
          <Route exact path="/" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MoviePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);

