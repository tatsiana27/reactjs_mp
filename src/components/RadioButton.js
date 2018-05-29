import React, { Fragment } from 'react';

import '../styles/radio-button.scss';


export function RadioButton(props) {


    return (
        <Fragment>
            <input
                id={props.id}
                type="radio"
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label htmlFor={props.id}>{props.value}</label>
        </Fragment>
    );
}