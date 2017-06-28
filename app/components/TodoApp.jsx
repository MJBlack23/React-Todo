import React from 'react';
import * as Redux from 'react-redux';
import { startLogout } from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';



export const TodoApp = React.createClass({
  onLogout (e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(startLogout());
  },
  render () {
    return (
      <div>
        <div className='page-actions'>
          <a to='/' onClick={ this.onLogout }>Logout</a>
        </div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column medium-centered small-12 medium-6 large-5'>
            <div className='container'>
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
