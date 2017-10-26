export default {
  setFilter (state, filter) {
    state.filter = filter
  },
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  deleteTodo (state, todo) {
    state.todos = state.todos.filter(value => value.uuid !== todo.uuid)
  },
  markTodoDone (state, todo) {
    const index = state.todos.findIndex(value => value.uuid === todo.uuid)

    todo.markComplete()
    state.todos[index] = todo
  },
  markTodoNotDone (state, todo) {
    const index = state.todos.findIndex(value => value.uuid === todo.uuid)

    todo.unmarkComplete()
    state.todos[index] = todo
  }
}
