// import { initialState }  from '../helpers/create-store';
const initialState = {
    movies: {
        data: [],
    },
    movie: {}
};

export function movies(state = initialState.movies, action) {
    const { type, payload } = action;
    const { data: movies } = state;

    switch (type) {
        case 'SEARCH_MOVIES':
            return {
                data: movies.concat(payload.data),
            };

        default:
            return state;
    }
}