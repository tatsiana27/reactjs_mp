import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { searchMovies, clearMovies } from '../actions/movies.action';
import { isValueSearchInputValue } from '../helpers/is-valid-search-input-value';
import { RadioButton } from './RadioButton';
import { FILTERS } from '../data/data';

import '../styles/search-block.scss';

export class SearchBlockUI extends Component {
    state = {
        search: '',
        searchBy: 'title',
        isValid: false
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { search, searchBy, isValid } = this.state;
        const { searchMovies, clearMovies } = this.props;

        clearMovies();

        if((isEmpty(search) && !isValid) || isEmpty(searchBy)) {
            return;
        }

        searchMovies({ search, searchBy});
    };

    onChangeInput = (event) => {
        const { searchBy } = this.state;
        const { value: search } = event.target;

        this.setState({ search, searchBy, isValid: isValueSearchInputValue(search) });
    };

    onRadioChange = (event) => {
        this.setState({
            searchBy: event.currentTarget.value
        });
    };

    render() {
        const { search, searchBy, isValid } = this.state;

        return (
            <form method="#" action="#" className="search-block" onSubmit={this.onSubmit}>
                <h4 className="title">Find your movie</h4>
                <input type="text"
                       id="movie-title"
                       autoFocus
                       onChange={this.onChangeInput}
                       value={search}
                />
                <span className={isValid ? 'd-none' : 'invalid-input'}>Search value is not valid</span>

                <div className="filter-block">
                    <div>
                        <p>search by</p>
                        {FILTERS.map(filter =>
                            <RadioButton
                                key={filter.id}
                                name={filter.name}
                                id={filter.id}
                                value={filter.name}
                                checked={searchBy === filter.name}
                                onChange={this.onRadioChange}
                            />)
                        }
                    </div>
                    <div>
                        <button id="search-btn" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    };
}

export const mapStateToProps = (state) => ({
    movies: state.movies,
});

export const mapDispatchToProps = (dispatch) => ({
    searchMovies: payload => searchMovies(dispatch, payload),
    clearMovies: payload => clearMovies(dispatch, null),
});

export const SearchBlock = connect(mapStateToProps, mapDispatchToProps)(SearchBlockUI);

