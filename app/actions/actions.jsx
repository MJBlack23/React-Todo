import firebase, { firebaseRef } from 'app/firebase/';
import moment from 'moment';

export const setSearchText = (searchText) => {
  return {
    searchText,
    type: 'SET_SEARCH_TEXT'
  }
};


export const addTodo = (todo) => {
  return {
    todo,
    type: 'ADD_TODO'
  }
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    }, (e) => {
      console.log(e);
    })
  }
};


export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};


export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const toggleTodos = (id) => {
  return {
    id,
    type: 'TOGGLE_TODO'
  }
};
