<template>
  <div class="row" :style>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VRow',
  props: {
    gutter: {
      type: [String, Number],
    },
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px',
      };
    },
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>

