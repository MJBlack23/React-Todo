const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo items', () => {
    let todos = [
      { id: 1, test: 'do something', completed: false, completedAt: undefined, createdAt: 500 },
      { id: 2, test: 'check mail', completed: false, completedAt: undefined, createdAt: 500 }
    ];

    const store = configure({
      todos
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={ store }>
        <ConnectedTodoList />
      </Provider>
    )

    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos } />);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(0);
  });
});
