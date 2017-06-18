import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

// APIs
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    let { todos } = this.state;
    this.setState({
      todos: [ ...todos, { id: uuid(), text, completed: false, createdAt: moment().unix(), completedAt: undefined }]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function (id) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos
    })
  },
  handleRemoveTodos: function () {
    TodoAPI.removeTodos();
    this.setState({
      todos: []
    });
  },
  render: function () {
    let { todos, showCompleted, searchText } = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={ this.handleSearch } />
              <TodoList todos={ filteredTodos } onToggle={ this.handleToggle }/>
              <AddTodo onAddTodo={ this.handleAddTodo } onRemoveTodos={ this.handleRemoveTodos } />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
