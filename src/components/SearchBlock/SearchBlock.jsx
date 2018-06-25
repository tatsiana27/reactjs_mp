import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
import { fetchMovies, updateParams } from '../../modules/movies';
import { isValidSearchInputValue } from '../../helpers/is-valid-search-input-value';
import { FILTERS, SORTINGS } from '../../data';

import { RadioButton } from '../RadioButton';
// import PropTypes from 'prop-types';
//
// import Movie from '../Movie';
// import EmptyResult from '../EmptyResult';
import './SearchBlock.scss';

export class SearchBlock extends Component {

  state = {
    search: '',
    searchBy: 'title',
    sortBy: 'raiting',
    isValid: false,
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { search, searchBy, isValid } = this.state;
    const { fetchMovies, params } = this.props;

    if((isEmpty(search) && !isValid) || isEmpty(searchBy)) {
      return;
    }

    fetchMovies({ search: params.search, searchBy: params.searchBy, sortBy: params.sortBy });
  };

  onChangeInput = (event) => {
    const { value: search } = event.target;
    const { updateParams } = this.props;
    const { searchBy, sortBy } = this.state;

    this.setState({ search, searchBy, isValid: isValidSearchInputValue(search) });
    updateParams({search: search, searchBy: searchBy, sortBy: sortBy});
  };

  onSearchRadioChange = (event) => {
    const { value: searchBy } = event.currentTarget;
    const { updateParams } = this.props;

    this.setState({
      searchBy: event.currentTarget.value
    });

    const { search, sortBy } = this.state;
    updateParams({search: search, searchBy: searchBy, sortBy: sortBy});

  };

  onSortRadioChange = (event) => {
    const { value: sortBy } = event.currentTarget;
    const { updateParams } = this.props;

    this.setState({
      sortBy: event.currentTarget.value
    });

    const { search, searchBy } = this.state;
    updateParams({search: search, searchBy: searchBy, sortBy: sortBy});
  };

  render() {
    const { search, searchBy, sortBy, isValid } = this.state;
    const { movies } = this.props;

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
                onChange={this.onSearchRadioChange}
              />)
            }
          </div>
          <div>
            <button id="search-btn" type="submit">Search</button>
          </div>
        </div>
        <div className="info-block">
          <span className="movies-count">{movies.total ? movies.total : 0} movies found</span>
          <div className="sorting-block">
            <p>Sort by</p>
            {SORTINGS.map(item =>
              <RadioButton
                key={item.id}
                name={item.name}
                id={item.id}
                value={item.name}
                checked={sortBy === item.name}
                onChange={this.onSortRadioChange}
              />)
            }
          </div>
        </div>
      </form>
    )
  };
}

SearchBlock.propTypes = {
  movies: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  loading: state.movies.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
  updateParams,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
