import React, { Component } from 'react';
import { RadioButton } from './RadioButton';
import { FILTERS } from '../data/data';

import './search-block.scss';

export class SearchBlock extends Component {
    render() {
        return (
            <form method="#" action="#" className="search-block">
                <h4 className="title">Find your movie</h4>
                <input type="text" id="movie-title" name="movie" />
                <div className="filter-block">
                    <div>
                        <p>search by</p>
                        {FILTERS.map(filter =>
                            <RadioButton
                                key={filter.id}
                                name={filter.name}
                                id={filter.id}
                                value={filter.name}
                                isChecked={filter.checked}
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

