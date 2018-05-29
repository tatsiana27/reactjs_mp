import React, { Component } from 'react';
import { RadioButton } from './RadioButton';
import { connect } from 'react-redux';
import { SORTINGS } from '../data/data';

import '../styles/info-block.scss';

export class InfoBlockUI extends Component {
    state = {
        sortBy: 'raiting'
    }
    onRadioChange = (event) => {
        this.setState({
            sortBy: event.currentTarget.value
        });
    };
    render () {
        const { sortBy } = this.state;
        const { movies } = this.props;

        return (
            <div className="info-block">
                <span className="movies-count">{movies.data.length} movies found</span>
                <div className="sorting-block">
                    <p>Sort by</p>
                    {SORTINGS.map(item =>
                        <RadioButton
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            value={item.name}
                            checked={sortBy === item.name}
                            onChange={this.onRadioChange}
                        />)
                    }
                </div>
            </div>
        );
    }
}

export const mapStateToProps = ({movies}) => {
    return {
        movies: movies,
    };
};

export const mapDispatchToProps = (dispatch) => ({});

export const InfoBlock = connect(mapStateToProps, mapDispatchToProps)(InfoBlockUI);