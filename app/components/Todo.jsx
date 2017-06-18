import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  handleClick: function () {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    const { id, text, completed, createdAt, completedAt } = this.props
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`
    }
    return (
      <div className={ todoClassName } onClick={ this.handleClick }>
        <div>
          <input type='checkbox' checked={ completed } />
        </div>
        <div>
          <p>{ text }</p>
          <p className='todo__subtext'>{ renderDate() }</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
