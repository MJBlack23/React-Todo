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

export const updateTodo = (id, updates) => {
  return {
    id,
    type: 'UPDATE_TODO',
    updates
  }
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};
