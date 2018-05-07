import React from 'react';
import { SearchBlock } from '../SearchBlock';
import { shallow } from 'enzyme';

describe('SearchBlock ', () => {
    test('should render SearchBlock Component', () => {
        const wrapper = shallow(
            <SearchBlock/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});