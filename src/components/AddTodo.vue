<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-input>
          <v-text-field
              label="New task"
              @submit.prevent="onsubmit">
            <input v-model="title" type="text">
          </v-text-field>
          <v-btn type="submit">Create</v-btn>
        </v-input>
      </v-col>
    </v-row>
  </v-container>
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
  border-width: 2px;
  border-color: darkgreen;
}

button {
  color: darkgreen;
  border-width: 2px;
  border-radius: 10%;
}
</style>