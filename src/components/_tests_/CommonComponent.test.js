import React from 'react';
import { CommonComponent } from '../CommonComponent';
import { shallow } from 'enzyme';

describe('CommonComponent ', () => {
    test('should render CommonComponent', () => {
        const wrapper = shallow(
            <CommonComponent/>

        );

        expect(wrapper).toMatchSnapshot();
    });
});