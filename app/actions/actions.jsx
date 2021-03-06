import firebase, { firebaseRef, githubProvider } from 'app/firebase/';
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
    const uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value').then((ss) => {
      let data = ss.val() || [];
      let todos = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key
        }
      });
      dispatch(addTodos(todos));
    }).catch(console.log);
  }
}; // end startAddTodos


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
    const uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((response) => {
      console.log('Auth worked', response);
      dispatch(login(response.user.uid));
      dispatch(startAddTodos());
    }, (error) => {
      console.log(error);
    });
  }
};

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};


export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      dispatch(logout());
    });
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
