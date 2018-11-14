import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9434}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with a single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434}/>);
  expect(wrapper).toMatchSnapshot();
});