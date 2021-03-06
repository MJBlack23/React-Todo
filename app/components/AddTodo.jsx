import React from 'react';
import { connect } from 'react-redux';
const actions = require('actions');
import { startAddTodo } from 'actions';

import RemoveTodos from 'RemoveTodos';

export const AddTodo = React.createClass({
  handleSubmit: function (e) {
    const { dispatch } = this.props;
    let todoText = this.refs.todoText.value;
    e.preventDefault();

    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      dispatch(startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {

    return (
      <div className='container__footer'>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' className='form-control' ref='todoText' placeholder='What do you need to do?' />
          <button type='submit' className='button expanded'>Add Todo</button>
        </form>
        {/* <RemoveTodos onRemoveTodos={ this.props.onRemoveTodos } /> */}
      </div>
    )
  }
});

export default connect()(AddTodo);
