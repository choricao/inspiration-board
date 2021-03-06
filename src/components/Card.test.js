import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card
      deleteCardCallback={() => {}}
      id={0}
      />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  test('Card can be deleted', () => {
    const mockDeleteCardCallback = jest.fn();
    const wrapper = shallow(<Card
      deleteCardCallback={mockDeleteCardCallback}
      id={10}
      />
    );

    wrapper.find('.card__delete').simulate('click', {
      target: {
        id: 10,
      }
    });
    wrapper.update();

    expect(mockDeleteCardCallback).toHaveBeenCalled();
    expect(mockDeleteCardCallback.mock.calls[0][0]).toEqual(10);
  });
});
