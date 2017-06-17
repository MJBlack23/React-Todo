const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo items', () => {
    let todos = [
      { id: 1, test: 'do something' },
      { id: 2, test: 'check mail' }
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos } />);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
