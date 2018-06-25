import { call, put, all, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

// Actions
const FETCH_MOVIES = 'movies/FETCH';
const FETCH_MOVIE_BY_ID = 'movies/FETCH_BY_ID';
const UPDATE = 'movies/UPDATE';
const UPDATE_CURRENT_MOVIE = 'movies/UPDATE_CURRENT_MOVIE';
const UPDATE_PARAMS = 'params/UPDATE';

// Action Creators
export const fetchMovies = params => ({
  type: FETCH_MOVIES,
  payload: params,
});
export const fetchMovieById = movieId => ({
  type: FETCH_MOVIE_BY_ID,
  payload: movieId,
});

export const updateMovies = movies => ({
  type: UPDATE,
  payload: movies,
});

export const updateCurrentMovie = movie => ({
  type: UPDATE_CURRENT_MOVIE,
  payload: movie,
});

export const updateParams = params => ({
  type: UPDATE_PARAMS,
  payload: params,
});

// Sagas
export function* fetchMoviesAsync(action) {

  let movies = yield [];

  if(!isEmpty(action.payload)) {
    const search = action.payload.search ? action.payload.search : '';
    const searchBy = action.payload.searchBy ? action.payload.searchBy : '';
    const sortBy = action.payload.searchBy ? action.payload.searchBy : '';

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/?search=${search}&searchBy=${searchBy}&sortBy=${sortBy}`);

    movies = yield response.json();
  }
  yield put(updateMovies(movies));
}
export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync(action) {
  debugger;
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${action.payload}`);
  const movie = yield response.json();

  yield put(updateCurrentMovie(movie));
}
export function* watchFetchMovieById() {
  yield takeLatest(FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

export function* watchUpdateParams() {
  yield takeLatest(UPDATE_PARAMS, updateParams);
}

// Movies Saga
export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieById(),
  ]);
}

// Params Saga
export function* paramsSaga() {
  yield all([
    watchUpdateParams(),
  ]);
}

// Initial state
const INITIAL_STATE = {
  movies: {
    loading: false,
    items: [],
  },
  params: {
    search: '',
    searchBy: '',
    sortBy: '',
  },
};

// Reducer
export const moviesReduces = (state = INITIAL_STATE.movies, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_MOVIE:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};

export const paramsReduces = (state = INITIAL_STATE.params, action = {}) => {
  switch (action.type) {
    case UPDATE_PARAMS:
      return {
        ...state,
        search: action.payload.search,
        searchBy: action.payload.searchBy,
        sortBy: action.payload.sortBy,
      };
    default:
      return state;
  }
};
