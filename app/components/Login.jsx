import React from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router';
import { startLogin } from 'actions';

export const Login = React.createClass({
  onLogin () {
    const { dispatch } = this.props;
    dispatch(startLogin());
  },
  render () {
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>

        <div className='row'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <div className='callout callout-auth'>
              <h3>Login</h3>
              <p>
                Login with Github Account Below
              </p>
              <button className='button' onClick={ this.onLogin }>Login with Github</button>
            </div>
          </div>'
        </div>
      </div>
    )
  }
});

export default Redux.connect()(Login);
