<template>
  <div class="v-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    let children = this.$el.children;
    for (let node of children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`g-button 的子元素需要都是button, 而你写的是${name}`);
      }
    }
  }
};
</script>

<style lang="scss">
.v-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .v-button {
    border-radius: 1px;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
