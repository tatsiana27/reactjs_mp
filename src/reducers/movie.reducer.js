const initialState = {
    movie: {}
}
export function movie(state = initialState.movie, action) {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_MOVIE':
            const { data: movie } = payload;

            return movie;
        default:
            return state;
    }
}