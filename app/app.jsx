const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');

import TodoApp from 'TodoApp';
import Login from 'Login';

import * as actions from 'actions';
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// app css
require('style!css!sass!applicationStyles');
$(document).ready(() => {
  $(document).foundation();
});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/'>
        <Route path='todos' component={ TodoApp }/>
        <IndexRoute  component={ Login } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
