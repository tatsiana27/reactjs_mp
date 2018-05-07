import React from 'react';
import { Home } from '../Home';
import { shallow } from 'enzyme';

describe('<Home />', () => {
    test('should render Home Page Component', () => {
        const wrapper = shallow(
            <Home />
        );

        expect(wrapper).toMatchSnapshot();
    });
});