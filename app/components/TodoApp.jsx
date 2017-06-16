import React from 'react';

import TodoList from 'TodoList';

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
  render: function () {
    let { todos } = this.state;
    return (
      <div>
        <TodoList todos={ todos } />
      </div>
    )
  }
});

module.exports = TodoApp;
