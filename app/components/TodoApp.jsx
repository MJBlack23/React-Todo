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
          text: 'Walk the Dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the Yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Master ReactJS',
          completed: false
        }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    let { todos } = this.state;
    this.setState({
      todos: [ ...todos, { id: uuid(), text, completed: false }]
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
      }
      return todo;
    });
    
    this.setState({
      todos
    })
  },
  render: function () {
    let { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } onToggle={ this.handleToggle }/>
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    )
  }
});

module.exports = TodoApp;
