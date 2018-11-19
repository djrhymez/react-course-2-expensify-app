//react-test-renderer
import React from 'react';
import {Header} from '../../components/Header';
import { shallow } from 'enzyme';

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout}/>);
}); 

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(startLogout).toHaveBeenCalledTimes(1);
});