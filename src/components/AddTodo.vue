<template>
  <v-layout>
    <v-container>
      <v-form @submit.prevent="onsubmit">
        <v-text-field
            v-model="title"
            label="New Task"
            single-line
            solo
            type="text"
        ></v-text-field>
        <v-btn
            class="purple darken-4"
            dark
            large
            type="submit"
        >Create
        </v-btn>
      </v-form>
    </v-container>
  </v-layout>
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

</style>