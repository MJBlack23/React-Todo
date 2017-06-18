import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk the Dog'
        },
        {
          id: uuid(),
          text: 'Clean the Yard'
        },
        {
          id: uuid(),
          text: 'Master ReactJS'
        }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    let { todos } = this.state;
    this.setState({
      todos: [ ...todos, { id: uuid(), text }]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    let { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    )
  }
});

module.exports = TodoApp;
