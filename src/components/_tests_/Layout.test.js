import React from 'react';
import { Layout } from '../../pages/Layout';
import { shallow } from 'enzyme';

describe('<Layout />', () => {
    test('should render Layout Component', () => {
        const wrapper = shallow(
            <Layout />
        );

        expect(wrapper).toMatchSnapshot();
    });
});