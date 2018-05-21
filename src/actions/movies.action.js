import axios from 'axios';

const axiosMovies = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com/movies',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export function searchMovies(dispatch, payload) {
    const { search, searchBy } = payload;

    return axiosMovies.get(`?search=${search}&searchBy=${searchBy}`)
        .then(({ data }) => {
            dispatch({
                type: 'SEARCH_MOVIES',
                payload: data,
            });

            return {
                type: 'SEARCH_MOVIES',
                payload: data,
            };
        })
        .catch(err => {
            console.log(err);
        });
}