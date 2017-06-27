const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, { firebaseRef } from 'app/firebase';

import * as actions from 'actions';

let createMockStore = configureMockStore([ thunk ]);

describe('Actions', () => {

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
      todo: {
        id: '12345',
        text: 'do stuff',
        completed: false,
        createdAt: 123412341234
      }
    }

    let response = actions.addTodo(action.todo);
    expect(response).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My Todo Item';

    let resp = store.dispatch(actions.startAddTodo(todoText));
    resp.then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
  });

  it('should generate ADD_TODOS action', () => {
    let todos = [
      { id: 111, text: 'anything', completed: false, completedAt: undefined, createdAt: 33000 }
    ];
    let action = {
      type: 'ADD_TODOS',
      todos
    };

    let response = actions.addTodos(todos);
    expect(response).toEqual(action);
  });

  it('should generate toggle show completed', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let response = actions.toggleShowCompleted();
    expect(response).toEqual(action);
  });

  it('should generate UPDATE_TODO action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 15,
      updates: { completed: false }
    }
    let response = actions.updateTodo(action.id, action.updates);
    expect(response).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();
        return testTodoRef.set({
          test: 'something todo',
          completed: false,
          createdAt: 234234234
        })
      }).then(() => done()).catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done()).catch(done);
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      let resp = store.dispatch(action)
      resp.then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({ completed: true });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }).catch(done);
    });
  });

});
