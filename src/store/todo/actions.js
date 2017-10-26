export default {
  markDone ({commit}, todo) {
    if (todo.completed) {
      commit('markTodoNotDone', todo)
    } else {
      commit('markTodoDone', todo)
    }
  }
}
