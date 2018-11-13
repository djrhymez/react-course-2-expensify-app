import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly without props', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense = {{...expenses[0]}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  //renders the ExpenseForm 
  const wrapper = shallow(<ExpenseForm />);

  //tests initial snapshot (before error event), no error message shown
  expect(wrapper).toMatchSnapshot();

  //causes form submission without any data (causes error)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  //tests error state (should NOT be empty)
  expect(wrapper.state('error').length).toBeGreaterThan(0);

  //tests snapshot with error message rendered
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  //value to change the description to
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const note = 'New Note text value.';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: {value: note}
  });

  expect(wrapper.state('note')).toBe(note);
});

test('should set amount if valid input amount given', () => {
  //amount set as string to mimic input format and to use match function 
  const validAmount = '23.50';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value: validAmount}
  });

  expect(wrapper.state('amount')).toBe(validAmount);
});

test('should not set amount if invalid input amount given', () => {
  const invalidAmount = '12.122';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: {value: invalidAmount}
  });

  expect(wrapper.state('amount')).not.toBe(invalidAmount);
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new focus state on calendar focus change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});