<template>
  <div class="col" :class="{['col-'+span]: span}"></div>
</template>

<script>
export default {
  name: 'VCol',
  props: {
    span: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  @for $i from 1 through 24 {
    &.col-#{$i} {
      width: ($i / 24) * 100%;
    }
  }
}
</style>
