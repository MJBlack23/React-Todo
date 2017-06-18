import React from 'react';

import Todo from 'Todo';

const TodoList = React.createClass({
  render: function () {
    let { todos } = this.props;
    if (todos.length === 0) {
      return (
        <p className='container__message'>Nothing To Do</p>
      )
    }
    const renderTodos = () => {
      return todos.map(todo => {
        return <Todo key={ todo.id } { ...todo } onToggle={ this.props.onToggle } />;
      });
    };

    return (
      <div>
        { renderTodos() }
      </div>
    )
  }
});

module.exports = TodoList;
