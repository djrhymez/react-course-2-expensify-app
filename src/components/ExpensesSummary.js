import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div>
      <p>
        Viewing {props.expenseCount} 
        {props.expenseCount === 1 ? ' expense ' : ' expenses '} 
        totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
      </p>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters)) 
  }
};

export default connect(mapPropsToState)(ExpensesSummary);