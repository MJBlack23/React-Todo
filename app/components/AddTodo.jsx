import React from 'react';

const AddTodo = React.createClass({
  handleSubmit: function (e) {
    const { onAddTodo } = this.props;
    let todoText = this.refs.todoText.value;
    e.preventDefault();

    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' className='form-control' ref='todoText' placeholder='What do you need to do?' />
          <button type='submit' className='button hollow primary expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
