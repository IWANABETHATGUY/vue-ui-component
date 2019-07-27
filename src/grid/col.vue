<template>
  <div class="col" :class="{['col-'+span]: span, ['offset-'+offset]: offset}" ></div>
</template>

<script>
export default {
  name: 'VCol',
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String]
    }
  }
};
</script>

<style scoped lang="scss">
.col {
  $class-prefix: col-;
  $offset-prefix: offset-;
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
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
