const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');

import TodoApp from 'TodoApp';

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
  const state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
