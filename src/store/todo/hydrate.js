import Todo from '../../models/todo'

export default function (state) {
  const todos = []

  state.todos.forEach(value => {
    const todo = new Todo()
    todo.fromJson(value)

    todos.push(todo)
  })

  state.todos = todos
}
