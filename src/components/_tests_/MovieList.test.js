import React from 'react';
import { MoviesList } from '../MoviesList';
import { shallow } from 'enzyme';

describe('MoviesList ', () => {
    test('should render MoviesList Component', () => {
        const wrapper = shallow(
            <MoviesList/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});