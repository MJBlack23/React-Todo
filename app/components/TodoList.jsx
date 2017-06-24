import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export const TodoList = React.createClass({
  render: function () {
    let { todos, showCompleted, searchText } = this.props;
    if (todos.length === 0) {
      return (
        <p className='container__message'>Nothing To Do</p>
      )
    }
    const renderTodos = () => {
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map(todo => {
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
    return state;
  }
)(TodoList)
