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
        todo: {
          id: '123',
          text: 'walk the dog',
          completed: false,
          createdAt: 8748875
        }
      };

      let response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      const todos = [{
        id: '123',
        text: 'Something...',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      const updates = {
        completed: false,
        completedAt: null
      }
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let response = reducers.todosReducer(df(todos), df(action));
      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      let todos = [
        { id: 111, text: 'anything', completed: false, completedAt: undefined, createdAt: 33000 }
      ];
      let action = {
        type: 'ADD_TODOS',
        todos
      };

      let response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(todos[0]);
    });

  });

});
