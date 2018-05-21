import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import createStore from './helpers/create-store'

render(
    <Provider store={createStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
