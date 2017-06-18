import React from 'react';

import Todo from 'Todo';

const TodoList = React.createClass({
  render: function () {
    let { todos } = this.props;
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
