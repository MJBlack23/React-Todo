const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }

      let response = reducers.searchTextReducer(df(''), df(action));
      expect(response).toEqual(action.searchText);
    });

    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      let response = reducers.showCompletedReducer(df(false), df(action));
      expect(response).toBe(true);
    });

  });

  describe('todosReducer', () => {

    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      let response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      const todos = [{
        id: '123',
        text: 'Something...',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      const action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      let response = reducers.todosReducer(df(todos), df(action));
      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(undefined);
    });

  });

});