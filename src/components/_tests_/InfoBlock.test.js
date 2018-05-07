import React from 'react';
import { InfoBlock } from '../InfoBlock';
import { shallow } from 'enzyme';

describe('InfoBlock ', () => {
    test('should render InfoBlock Component', () => {
        const wrapper = shallow(
            <InfoBlock/>

        );

        expect(wrapper).toMatchSnapshot();
    });
});