<template>
  <v-card class="my-5">
    <v-card-text>
      <input type="checkbox" v-on:change="todo.completed=!todo.completed">
      <span v-bind:class="{done: todo.completed}">
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
      </span>
      <v-btn
          rounded small @click="$emit('remove-todo', todo.id)">
        Del
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}

</style>