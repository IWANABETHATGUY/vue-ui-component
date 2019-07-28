<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border:1px solid green;height: 100%;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCol',
  data() {
    return {
      gutter: 0,
    };
  },
  props: {
    span: {
      type: [Number, String],
      default: 0,
    },
    offset: {
      type: [Number, String],
    },
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      };
    },
    colClass() {
      const { offset, span } = this;
      return {
        ['col-' + span]: span,
        ['offset-' + offset]: offset,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  $class-prefix: col-;
  $offset-prefix: offset-;
  height: 100px;
  width: 50%;
  // border: 1px solid
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
    &.#{$offset-prefix}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}
</style>
