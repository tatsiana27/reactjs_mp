import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { reducers } from '../reducers/reducer';

export default createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(createLogger({collapsed:true}))
);