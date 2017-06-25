import $ from 'jQuery';

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    return todos;
  },
  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  removeTodos: function () {
    localStorage.removeItem('todos');
    return [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter(todo => {
      let todoText = (todo.text) ? todo.text.toLowerCase() : '';
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // sort by completed status (non-completed first)
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1
      } else if (a.completed && !b.completed) {
        return 1
      } else {
        return 0
      }
    })


    return filteredTodos;
  }
}
