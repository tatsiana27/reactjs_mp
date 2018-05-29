const initialState = {
    movies: {
        data: [],
    },
};

export function movies(state = initialState.movies, action) {
    const { type, payload } = action;
    const { data: movies } = state;

    switch (type) {
        case 'SEARCH_MOVIES':
            return {
                data: movies.concat(payload.data),
            };

        case 'CLEAR_MOVIES':
            return initialState.movies;

        default:
            return state;
    }
}