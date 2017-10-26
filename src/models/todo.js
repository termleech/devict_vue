const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)

    return v.toString(16)
  })
}

class Todo {
  constructor (todo = '') {
    this.uuid = uuid()
    this.todo = todo
    this.completed = false
    this.createdDate = new Date()
  }

  fromJson (json) {
    this.uuid = json.uuid || uuid()
    this.todo = json.todo
    this.completed = json.completed
    this.createdDate = new Date(json.createdDate)
  }

  markComplete () {
    this.completed = true
  }

  unmarkComplete () {
    this.completed = false
  }
}

export default Todo
