<template>
  <svg class="v-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.v-icon {
  height: 1em;
  width: 1em;
}
</style>

