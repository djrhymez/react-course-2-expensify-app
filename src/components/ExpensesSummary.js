import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal, hiddenExpenses}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotal}</span>
        </h1>
        {
          hiddenExpenses != 0 && 
          <h2 className="page-header__title">
            <span>{hiddenExpenses}</span> 
            {hiddenExpenses > 1? ' expenses are ' : ' expense is '} 
            currently <span>hidden</span> by filters.
          </h2>
        }   
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  const numberOfHiddenExpenses = state.expenses.length - visibleExpenses.length;

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
    hiddenExpenses: numberOfHiddenExpenses
  };
};

export default connect(mapPropsToState)(ExpensesSummary);