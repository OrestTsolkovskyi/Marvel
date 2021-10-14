<template>
  <v-form style="width: 1000px; height:50px" @submit.prevent="onsubmit">
    <v-text-field
        v-model="title"
        background-color="rgba(255, 255, 255, 0.4)"
        label="New Task"
        single-line
        solo
        type="text"
    ></v-text-field>
    <v-btn
        class="text-none px-6"
        color="#27B769"
        dark
        elevation="5"
        height="48px"
        large
        type="submit"
    >Create
    </v-btn>
  </v-form>
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
  max-width: 1000px;

}

v-layout, v-container {
  max-width: 1000px;
}
</style>