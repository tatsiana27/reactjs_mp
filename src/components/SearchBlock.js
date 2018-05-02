import React, { Component } from 'react';
import './search-block.scss';

export class SearchBlock extends Component {
    render() {
        return (
            <form method="#" action="#" className="search-block">
                <div>
                    <h4 className="title">Find your movie</h4>
                    <input type="text" id="movie-title" name="movie" />
                </div>
                <div className="filter-block">
                    <div>
                        <p>search by</p>
                        <input
                            id="filter-title"
                            type="radio"
                            name="title"
                            value=""
                            checked={true}
                        />
                        <label htmlFor="filter-title">TITLE</label>

                        <input
                            id="filter-genre"
                            type="radio"
                            name="genre"
                            value="GENRE"
                            checked={false}
                        />
                        <label htmlFor="filter-genre">GENRE</label>
                    </div>
                    <div>
                        <button id="search-btn" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    };
}

