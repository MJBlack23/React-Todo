import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        },
        {
          id: 2,
          text: 'Clean the Yard'
        },
        {
          id: 3,
          text: 'Master ReactJS'
        }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    alert(`New todo: ${text}`);
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
