import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movies.action';
import { RadioButton } from './RadioButton';
import { FILTERS } from '../data/data';

import './search-block.scss';

export class SearchBlockUI extends Component {
    state = {
        search: '',
        searchBy: 'title',
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { search, searchBy } = this.state;
        const { searchMovies } = this.props;

        searchMovies({ search, searchBy });
    };

    onChangeInput = (event) => {
        const { searchBy } = this.state;
        const { value: search } = event.target;

        this.setState({ search, searchBy });
    };

    onChangeRadioBtn = (event) => {

    };

    render() {
        const { search, searchBy } = this.state;
        return (
            <form method="#" action="#" className="search-block" onSubmit={this.onSubmit}>
                <h4 className="title">Find your movie</h4>
                <input type="text"
                       id="movie-title"
                       autoFocus
                       onChange={this.onChangeInput}
                       value={search}
                />
                <div className="filter-block">
                    <div>
                        <p>search by</p>
                        {FILTERS.map(filter =>
                            <RadioButton
                                key={filter.id}
                                name={filter.name}
                                id={filter.id}
                                value={filter.name}
                                isChecked={searchBy === filter.name}
                                onChange={this.onChangeRadioBtn}
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
});

export const SearchBlock = connect(mapStateToProps, mapDispatchToProps)(SearchBlockUI);

