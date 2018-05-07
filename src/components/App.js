import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';

function App () {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;