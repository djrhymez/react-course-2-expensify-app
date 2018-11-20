import LoadingPage from '../../components/LoadingPage';
import React from 'react';
import {shallow} from 'enzyme';

test('should correctly render the LoadingPage component', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});