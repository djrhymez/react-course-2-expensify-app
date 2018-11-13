import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters correctly', () => {
  wrapper.setProps({filters: altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const e = { target: {value: 'new text value'} };

  wrapper.find('input').at(0).simulate('change', e);
  expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value);
});

test('should sort by date', () => {
  const e = {target: {value: 'date'}};

  wrapper.find('select').at(0).simulate('change', e);
  expect(sortByDate).toHaveBeenCalledTimes(1);
  expect(sortByAmount).not.toHaveBeenCalled();
});

test('should sort by amount', () => {
  const e = {target: {value: 'amount'}}

  wrapper.find('select').at(0).simulate('change', e);
  expect(sortByAmount).toHaveBeenCalledTimes(1);
  expect(sortByDate).not.toHaveBeenCalled();
}); 

test('should handle date changes', () => {
  const startDate = moment(0).add(2, 'days');
  const endDate = moment(0).add(5, 'days');

  wrapper.find('DateRangePicker').at(0).prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  expect(wrapper.state('calendarFocused')).toBe(null);

  wrapper.find('DateRangePicker').at(0).prop('onFocusChange')('startDate');
  expect(wrapper.state('calendarFocused')).toBe('startDate');
  
  wrapper.find('DateRangePicker').at(0).prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});