import React, { Fragment } from 'react';

import './radio-button.scss';

export function RadioButton(props) {
    return (
        <Fragment>
            <input
                id={props.id}
                type="radio"
                name={props.name}
                value={props.value}
                checked={props.isChecked}
            />
            <label htmlFor={props.name}>{props.value}</label>
        </Fragment>
    );
}