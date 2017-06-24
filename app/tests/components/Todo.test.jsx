const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const { Todo } = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    let todoText = {
      id: 11,
      text: 'test features',
      completed: true
    }
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo { ...todoText } dispatch={ spy } />);

    let $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoText.id
    });
  });
});
