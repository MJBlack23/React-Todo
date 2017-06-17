import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
      ]
    }
  },
  handleAddTodo: function (text) {
    alert(`New todo: ${text}`);
  },
  render: function () {
    let { todos } = this.state;
    return (
      <div>
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    )
  }
});

module.exports = TodoApp;
