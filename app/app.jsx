const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
