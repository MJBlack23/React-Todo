const uuid = require('node-uuid');
const moment = require('moment');


export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state;
  }
}; // end searchTextReducer

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;

    default:
      return state;
  }
}; // end toggleShowCompleted

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];

    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          }
        } else {
          return todo;
        }
      });

      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];

    default:
      return state;
  }
}; // end addTodo
