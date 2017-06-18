import React from 'react';

const RemoveTodos = React.createClass({
  handleRemove: function () {
    this.props.onRemoveTodos();
  },
  render: function () {
    return (
      <div>
        <button type='button' className='button expanded alert' onClick={ this.handleRemove }>Reset Todos</button>
      </div>
    )
  }
});

module.exports = RemoveTodos;
