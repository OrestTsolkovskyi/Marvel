<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
<input type="checkbox" v-on:change="todo.completed=!todo.completed">
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="del" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
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
li {
  border: 2px solid #777;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 0.5rem;
}

.del {
  background: darkgreen;
  color: #fff;
  border-radius: 25%;
  font-weight: bolder;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}

</style>