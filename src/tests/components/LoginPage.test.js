import {LoginPage} from '../../components/LoginPage';
import React from 'react';
import { shallow } from 'enzyme';

let wrapper, startLogin;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin}/>);  
});

test('should render login page properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(startLogin).toHaveBeenCalledTimes(1);
});