import * as redux from 'redux';
import thunk from 'redux-thunk';
import { searchTextReducer, showCompletedReducer, todosReducer, authReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  // const store = redux.createStore(reducer, redux.compose(
    // window.devToolsExtension ? window.devToolsExtension : f => f
  // ));

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
};
