<template>
  <div ref="popup_wrapper" class="popup_wrapper">
    <v-card>
      <div class="v-popup">
        <div class="v-popup__header">
          <span>{{ popupTitle }}</span>
          <v-icon @click="closePopup">
            close
          </v-icon>
        </div>
        <div class="v-popup__content">
          <slot></slot>
        </div>
        <div class="v-popup__footer">
          <slot name="actions"></slot>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: 'Popup title'
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },

    cancelChanges() {
      this.$emit('cancelChanges')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    })
  }
}

</script>

<style scoped>
.popup_wrapper {
  background: rgba(188, 255, 218, 0.6);;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.v-popup {
  padding: 15px;
  position: fixed;
  top: 100px;
  width: 400px;
  box-shadow: 0 0 15px 0 black;
  background-color: #bcffda;
}

.v-popup__header, .v-popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>