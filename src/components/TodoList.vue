<template>
  <v-layout align-space-around column style="width: 1000px">
    <ul class="pa-0" style="justify-content: center">
      <TodoItem
          v-for="(todo, i) in todos"
          :key="todo.id"
          v-bind:index="i"
          v-bind:todo="todo"
          v-on:remove-todo="removeTodo"
      />
    </ul>
  </v-layout>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style>

</style>