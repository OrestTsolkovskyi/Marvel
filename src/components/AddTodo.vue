<template>
  <form @submit.prevent="onsubmit">
    <input v-model="title" type="text">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onsubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

input {
  width: 1000px;
  border-width: 2px;
}

button {
  color: darkgreen;
  border-width: 2px;
  border-radius: 10%;
}
</style>