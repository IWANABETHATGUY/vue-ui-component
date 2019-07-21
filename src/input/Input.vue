<template>
  <div class="wrapper" :class="{error}">
    <input type="text" class="v-input" :value="value" :disabled="disabled" :readonly="readonly" />
    <template v-if="error">
      <v-icon name="error" class="icon-error"></v-icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>
import VIcon from '../icon/Icon.vue';
export default {
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      tyep: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  components: {
    VIcon,
  },
};
</script>

<style lang="scss" scoped>
// --button-height: 32px;
// --font-size: 14px;
// --button-bg: white;
// --button-active-bg: #eee;
// --border-radius: 4px;
// --color: #333;
// --border-color: #999;
// --border-color-hover: #666;
$height: 32px;
$border-color-hover: #666;
$border-color: #999;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline-block;
  font-size: $font-size;

  > .v-input {
    border: 1px solid $border-color;
    height: $height;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      cursor: not-allowed;
      border-color: #bbb;
      color: #bbb;
    }
  }
  &.error {
    > .v-input {
      border-color: $red;
    }
    span {
      color: $red;
    }
    .icon-error {
      fill: $red;
    }
  }
}
</style>
