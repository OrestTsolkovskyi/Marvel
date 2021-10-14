<template>
  <v-container class="px-0" fluid style="width: 1000px; padding-top: 50px">
    <v-tabs
        v-model="itemIndex"
        background-color="rgba(255, 255, 255, 0)"
        class="mb-4 d-flex"
        color="#27B769"
        height="40px"
    >
      <v-tab
          v-for="item in items"
          :key="item"
          class="text-none px-5"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <AddTodo
        @add-todo="addTodo"
    />
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>NO TASKS</p>
  </v-container>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/views/AddTodo.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'app',
  data() {
    return {
      itemIndex: null,
      items: ['all', 'active', 'completed'],
      todos: [
        {id: 1, title: 'Buy bread', completed: false},
        {id: 2, title: 'Buy egs', completed: false},
        {id: 3, title: 'Buy mayo', completed: false},
        {id: 4, title: 'Buy potato', completed: false},
        {id: 5, title: 'Buy cheese', completed: false},
      ],
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },

  computed: {
    filter() {
      return this.items[this.itemIndex]
    },
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'active') {
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
  },
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>

<style scoped>

</style>