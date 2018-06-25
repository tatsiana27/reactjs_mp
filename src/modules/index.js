import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  moviesReduces,
  paramsReduces,
  moviesSaga,
  paramsSaga,
} from './movies';

function* rootSaga() {
  yield all([
    moviesSaga(),
    paramsSaga(),
  ]);
}

const rootReducer = combineReducers({
  movies: moviesReduces,
  params: paramsReduces,
});

export {
  rootReducer,
  rootSaga,
};
