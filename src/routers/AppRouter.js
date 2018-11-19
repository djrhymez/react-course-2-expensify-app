import React from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboardPage}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;