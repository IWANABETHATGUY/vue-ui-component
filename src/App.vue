<template>
  <div id="app">
    <v-button icon="setting">提交</v-button>
    <v-button icon="setting" icon-position="right">
      提交
      <v-icon name="loading" class="loading" />
    </v-button>
  </div>
</template>

<script>
import VButton from './button/Button.vue';
import VIcon from './icon/Icon.vue';
export default {
  components: {
    VButton,
    VIcon
  }
};
</script>

<style>
</style>

