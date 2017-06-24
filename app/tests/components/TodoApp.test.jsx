const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const configureStore = require('configureStore');

const TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todolist', () => {
    const store = configureStore.configure();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={ store }>
        <TodoApp />
      </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toEqual(1);
  });


});
