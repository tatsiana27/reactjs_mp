import React from 'react';
import { Header } from '../Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
    test('should render Header Component with children', () => {
        const wrapper = shallow(
            <Header>
                <div>mocks children</div>
            </Header>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should render Header Component without children', () => {
        const wrapper = shallow(
            <Header />
        );

        expect(wrapper).toMatchSnapshot();
    });
});