import React from 'react';
import { RadioButton } from '../RadioButton';
import { shallow } from 'enzyme';

describe('RadioButton ', () => {
    test('should render RadioButton Component', () => {
        const wrapper = shallow(
            <RadioButton/>

        );

        expect(wrapper).toMatchSnapshot();
    });
});