const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { browserHistory } = require('react-router');
import firebase from 'app/firebase/';
const store = require('configureStore').configure();

import { startAddTodos } from 'actions';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    browserHistory.push('/todos');
  } else {
    browserHistory.push('/');
  }
});

store.dispatch(startAddTodos());

// app css
require('style!css!sass!applicationStyles');
$(document).ready(() => {
  $(document).foundation();
});



ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
  document.getElementById('app')
);
