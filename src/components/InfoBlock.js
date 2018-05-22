import React, { Component } from 'react';
import { RadioButton } from './RadioButton';
import { SORTINGS } from '../data/data';

import '../styles/info-block.scss';

export function InfoBlock() {
    return (
        <div className="info-block">
            <span className="movies-count">0 movies found</span>
            <div className="sorting-block">
                <p>Sort by</p>
                {SORTINGS.map(item =>
                    <RadioButton
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        value={item.name}
                        isChecked={item.checked}
                    />)
                }
            </div>
        </div>
    );
}