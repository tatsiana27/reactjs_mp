import React from 'react';
import { MovieItem } from '../MovieItem';
import { shallow } from 'enzyme';

describe('MovieItem ', () => {
    test('should render MovieItem Component', () => {
        const wrapper = shallow(
            <MovieItem/>

        );

        expect(wrapper).toMatchSnapshot();
    });
});