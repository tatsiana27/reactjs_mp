import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MovieInfo } from '../pages/MovieInfo';
import { NotFound } from '../pages/NotFound';

export function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movie-info/:id" component={MovieInfo} />
                    <Route exact path="/*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};