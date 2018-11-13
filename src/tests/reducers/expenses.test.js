import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const action = { type: '@@INIT' };

  const state = expensesReducer(undefined, action);

  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should NOT remove expense by ID if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 'abc',
    description: 'Car Payment',
    amount: 125000,
    note: '',
    dateCreated: moment().valueOf()
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'edited description text';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[0].description).toEqual(description);
});

test('should NOT edit an expense if expense not found', () => {
  const description = 'edited description text';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});