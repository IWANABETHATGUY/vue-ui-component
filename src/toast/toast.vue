<template>
  <div class="toast">
    <div v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span class="close-button" v-if="closeButton" @click="closeButtonCallback">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 1000,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback(toast) {
            console.log(toast);
          },
        };
      },
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    closeButtonCallback() {
      const { closeButton } = this;
      if (closeButton && typeof closeButton.callback === 'function') {
        closeButton.callback(this);
      }
      this.close();
    },
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.autoCloseDelay * 1000);
  },
};
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: $toast-height;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: $toast-bg;
  padding: 0 16px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
  .line {
    display: inline-block;
    width: 1px;
    height: 100%;
    background: red;
    margin: 0 8px;
  }
  .close-button {
    cursor: pointer;
  }
}
</style>
