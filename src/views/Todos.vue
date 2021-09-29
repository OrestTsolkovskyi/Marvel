<template>
  <v-app>
    <v-card>
      <v-toolbar class="purple darken-4" dark dense>
        <v-toolbar-title>Todo list</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            color="purple darken-4"
        >
          <router-link style="color: white" to="/">Home</router-link>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-spacer></v-spacer>
    <v-content>
      <v-container>
        <AddTodo
            @add-todo="addTodo"
        />
        <v-row align="center">
          <v-col
              class="d-flex"
              cols="6"
              sm="3"
          >
            <v-select
                v-model="filter"
                :items="items"
                class="pa-4"
                label="Tasks"
                solo
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="not-completed">Not Completed</option>
            </v-select>
          </v-col>
        </v-row>
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="filteredTodos.length"
            v-bind:todos="filteredTodos"
            @editTodo="editTodo"
            @remove-todo="removeTodo"
        />
        <p v-else>No todos!</p>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'app',
  data() {
    return {
      items: ['all', 'completed', 'not-completed'],
      todos: [
        {id: 1, title: 'Buy bread', completed: false},
        {id: 2, title: 'Buy egs', completed: false},
        {id: 3, title: 'Buy mayo', completed: false}
      ],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return []
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
    editTodo() {
      this.todos = this.todos.title()
    }
  },
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>

<style>

</style>