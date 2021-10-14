<template>
  <v-card
      class="my-2"
      color="rgba(255, 255, 255, 0.3)"
      elevation="5"
      flat
      max-width="1000"
  >
    <v-card-text style="align-items: center; display: flex;">
      <v-popup
          v-if="isShowTodoVisible"
          :popupTitle="todo.title"
          @cancelChanges="cancelChanges"
          @closePopup="closePopup"
      >
        <v-text-field
            v-model="newTitle"
            label="Edit task"
            type="text"
        >
        </v-text-field>
        <template #actions>
          <v-btn
              color="#bcffda"
              elevation="5"
              small
              @click="cancelChanges"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              class="ma-2"
              color="#bcffda"
              elevation="5"
              small
              type="submit"
              @click="applyChanges"
          >
            <v-icon
                color="#27B769"
                small
            >edit
            </v-icon>
          </v-btn>
        </template>
      </v-popup>
      <input

          type="checkbox"
          v-on:change="todo.completed=!todo.completed"/>
      <v-chip
          class="mx-2 white--text"
          style="height: 25px; width: 82px; justify-content: center"
          v-bind:color="getStatusColor"
      >
        {{ getStatus }}
      </v-chip>

      <span
          class="px-10"
          v-bind:class="{done: todo.completed}"
      >
        {{ todo.title | uppercase }}
      </span>
      <v-spacer></v-spacer>
      <v-icon
          class="ma-2 px-2"
          color="#27B769"
          size="23"
          style="align-self: center;"
          @click="showPopup"
      >edit
      </v-icon>
      <v-icon
          color="red darken"
          size="25"
          style="align-self: center;"
          @click="$emit('remove-todo', todo.id)">
        delete
      </v-icon>
    </v-card-text>
  </v-card>
</template>

<script>

import vPopup from "./popup/popup";

export default {
  components: {
    vPopup
  }
  ,
  props:
      {
        todo: {
          type: Object,
          required: true,
        }
        ,
        index: Number
      }
  ,
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
  ,
  data() {
    return {
      newTitle: this.todo.title,
      isShowTodoVisible: false,
    }
  }
  ,
  computed: {
    getStatus() {
      if (this.todo.completed === true) {
        return 'Done';
      } else {
        return 'Waiting';
      }
    }
    ,

    getStatusColor() {
      return this.todo.completed ? '#27B769' : 'red darken';
    }
  }
  ,
  methods: {
    showPopup() {
      this.isShowTodoVisible = true;
    },

    closePopup() {
      this.isShowTodoVisible = false;
    },

    cancelChanges() {
      this.newTitle = this.todo.title;
      this.closePopup();
    },
    applyChanges() {
      this.todo.title = this.newTitle;
      this.closePopup();
    }
  }
}

</script>

<style scoped>
.done {
  text-decoration: line-through;
}

input {
  margin-right: 15px;

}
</style>