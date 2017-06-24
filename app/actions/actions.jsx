export const setSearchText = (searchText) => {
  return {
    searchText,
    type: 'SET_SEARCH_TEXT'
  }
};


export const addTodo = (text) => {
  return {
    text,
    type: 'ADD_TODO'
  }
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const toggleID = (id) => {
  return {
    id,
    type: 'TOGGLE_TODO'
  }
};
