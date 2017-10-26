const getCompleted = state => state.todos.filter(todo => todo.completed)
const getNotCompleted = state => state.todos.filter(todo => !todo.completed)
const getAll = state => state.todos

export default {
  getFiltered: (state) => {
    if (state.filter === 'completed') {
      return getCompleted(state)
    }

    if (state.filter === 'todo') {
      return getNotCompleted(state)
    }

    return getAll(state)
  },
  getCompleted,
  getNotCompleted,
  getAll
}
