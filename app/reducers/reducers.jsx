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

export const toggleShowCompleted = (state = false, action) => {
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
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          let nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          }
        }
      });

    default:
      return state;
  }
}; // end addTodo
