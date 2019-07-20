<template>
  <button class="v-button">
    <svg class="icon" v-if="icon" :style="{order: iconPosition && iconPosition==='right' ?  2: 0}">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String
    },
    step: {
      type: Number
    },
    iconPosition: {
      type: String,
      validator(value) {
        return ['left', 'right'].includes(value);
      }
    }
  }
};
</script>
<style lang="scss">
.v-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  background: var(--button-bg);
  vertical-align: middle;
  line-height: var(--font-size);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
