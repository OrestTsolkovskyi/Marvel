<template>
  <v-card class="my-5" max-width="1000">
    <v-card-text>
      <v-popup
          v-if="isShowTodoVisible"
          :popupTitle="todo.id"
          @applyChanges="applyChanges"
          @closePopup="closePopup"
      >
        <input v-model="message" placeholder="edit todo"
               @submit="applyChanges"
        >
        <h3>{{ message }}</h3>
      </v-popup>
      <v-chip
          class="mx-2 white--text"
          label
          v-bind:color="getStatusColor"
      >
        {{ getStatus }}
      </v-chip>

      <input type="checkbox" v-on:change="todo.completed=!todo.completed">
      <span
          v-bind:class="{done: todo.completed}">
        <strong>{{ index + 1 }}</strong>
        {{ todo.title | uppercase }}
      </span>
      <v-btn
          class="ma-2"
          color="teal"
          outlined
          x-small
          @click="showPopup"
      >
        <v-icon
            small
        >edit
        </v-icon>
      </v-btn>

      <v-btn
          color="purple"
          fab
          outlined
          rounded
          small
          @click="$emit('remove-todo', todo.id)">
        <v-icon>
          delete_outline
        </v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>

import vPopup from "./popup/v-popup";

export default {
  components: {
    vPopup
  },
  props:
      {
        todo: {
          type: Object,
          required: true,
        }
        ,
        index: Number
      },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  },
  data() {
    return {
      isShowTodoVisible: false
    }
  },
  computed: {
    getStatus() {
      if (this.todo.completed === true) {
        return 'Done';
      } else {
        return 'Waiting';
      }
    },

    getStatusColor() {
      return this.todo.completed ? 'blue' : 'red';
    }
  },
  methods: {
    showPopup() {
      this.isShowTodoVisible = true;
    },

    closePopup() {
      this.isShowTodoVisible = false;
    },
    applyChanges() {
      this.applyChanges = true;
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

v-card-text {
  max-width: 1000px;

}

</style>