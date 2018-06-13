import React from 'react';
import Board from './Board';
import { mount } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount(<Board />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
