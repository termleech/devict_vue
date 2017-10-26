<template>
  <div>
    <md-layout>
      <md-layout md-align="center">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
              <md-input v-model="todo.todo" @enter="submit"></md-input>
          </md-input-container>
        </form>
      </md-layout>
    </md-layout>
    <md-layout md-align="center">
      <md-table-card>
        <md-toolbar>
          <h1 class="md-title">Todos</h1>
          <md-input-container>
            <md-select name="filter" id="filter" v-model="filter">
              <md-option value="all">All</md-option>
              <md-option value="completed">Completed</md-option>
              <md-option value="todo">Todo</md-option>
            </md-select>
          </md-input-container>
        </md-toolbar>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Created</md-table-head>
              <md-table-head>Todo</md-table-head>
              <md-table-head>Completed</md-table-head>
              <md-table-head>Actions</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="(todo, index) in getFiltered" :key="index">
              <md-table-cell>{{ formatDate(todo.createdDate) }}</md-table-cell>
              <md-table-cell>{{ todo.todo }}</md-table-cell>
              <md-table-cell>{{ todo.completed }}</md-table-cell>
              <md-table-cell>
                <md-button class="md-icon-button md-raised" @click="markTodoDone(todo)">
                  <md-icon>save</md-icon>
                </md-button>
                <md-button class="md-icon-button md-raised" @click="deleteTodo(todo)">
                  <md-icon>delete</md-icon>
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-table-card>
    </md-layout>
  </div>
</template>

<script>
import moment from 'moment-mini'
import { mapActions, mapGetters, mapState } from 'vuex'
import Todo from '../models/todo'

export default {
  name: 'Todo',
  data () {
    return {
      todo: new Todo()
    }
  },
  computed: {
    ...mapGetters('todo', ['getFiltered']),
    ...mapState('todo', {
      todoFilter: state => state.filter,
      todos: state => state.todos
    }),
    filter: {
      get () {
        return this.todoFilter
      },
      set (value) {
        this.$store.commit('todo/setFilter', value)
      }
    }
  },
  methods: {
    ...mapActions('todo', {
      'markTodoDone': 'markDone'
    }),
    deleteTodo (todo) {
      this.$store.commit('todo/deleteTodo', todo)
    },
    formatDate (date) {
      return moment(date).format('M/D/YYYY')
    },
    submit () {
      this.$store.commit('todo/addTodo', this.todo)
      this.todo = new Todo()
    }
  }
}
</script>
