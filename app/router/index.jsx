import React from 'react';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import firebase from 'app/firebase/';

import TodoApp from 'TodoApp';
import Login from 'Login';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={ browserHistory }>
    <Route path='/'>
      <Route path='todos' component={ TodoApp } onEnter={ requireLogin }/>
      <IndexRoute  component={ Login } />
    </Route>
  </Router>
);
