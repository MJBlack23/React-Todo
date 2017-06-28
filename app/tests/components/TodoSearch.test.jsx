const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  let spy = expect.createSpy();
  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    let searchText = 'dog';
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={ spy } />);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={ spy } />);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
