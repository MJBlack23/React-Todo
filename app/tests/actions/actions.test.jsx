const expect = require('expect');
const actions = require('actions');

describe('actions', () => {

  it('should generate seach text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    }

    let response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'do stuff'
    }

    let response = actions.addTodo(action.text);
    expect(response).toEqual(action);
  });

  it('should generate toggle show completed', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let response = actions.toggleShowCompleted();
    expect(response).toEqual(action);
  });

  it('should generate toggle todo', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 15
    }
    let response = actions.toggleID(action.id);
    expect(response).toEqual(action);
  });

});
