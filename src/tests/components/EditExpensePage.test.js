import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, expense, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  expense = expenses[1];
  wrapper = shallow(
    <EditExpensePage 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense} 
      history={history} 
      expense={expense} 
    />
  );
});

test('should render ExitExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const updates = {
    description: 'updated Rent payment',
    amount: '1500'
  };

  wrapper.find('ExpenseForm').prop('onSubmit')(updates);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, updates);
});

test('should handle removeExpense', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
});