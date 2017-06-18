import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  handleClick: function () {
    this.props.onToggle(this.props.id);
  },
  render: function () {
    const { id, text, completed, createdAt, completedAt } = this.props
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
      <div onClick={ this.handleClick }>
        <input type='checkbox' checked={ completed } />
        <p>{ text }</p>
        <p>{ renderDate() }</p>
      </div>
    )
  }
});

module.exports = Todo;
