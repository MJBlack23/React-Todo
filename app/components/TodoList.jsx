import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

export const TodoList = React.createClass({
  render: function () {
    let { todos } = this.props;
    if (todos.length === 0) {
      return (
        <p className='container__message'>Nothing To Do</p>
      )
    }
    const renderTodos = () => {
      return todos.map(todo => {
        return <Todo key={ todo.id } { ...todo } />;
      });
    };

    return (
      <div>
        { renderTodos() }
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList)
