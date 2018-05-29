import React from 'react';
import { Home } from '../../pages/Home';
import { shallow } from 'enzyme';

describe('<Home />', () => {
    test('should render Home Page Component', () => {
        const wrapper = shallow(
            <Home />
        );

        expect(wrapper).toMatchSnapshot();
    });
});