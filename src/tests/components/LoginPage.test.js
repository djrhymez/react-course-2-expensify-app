import LoginPage from '../../components/LoginPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render login page properly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});