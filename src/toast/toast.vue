<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: $toast-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: $toast-bg;
  padding: 0 16px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
}
</style>
