<template>
  <div id="app">
    <v-button icon="setting" :loading="state" @click.native="send">提交</v-button>
    <v-button icon="setting" icon-position="right" :loading="state" @click.native="send">提交</v-button>
    <v-button-group>
      <v-button icon="setting" :loading="state" @click.native="send">提交</v-button>
      <v-button>不知道</v-button>
      <v-button icon="setting" icon-position="right" :loading="state" @click.native="send">提交</v-button>
    </v-button-group>
  </div>
</template>

<script>
import VButton from './button/Button.vue';
import VIcon from './icon/Icon.vue';
import VButtonGroup from './button/ButtonGroup.vue';
export default {
  data() {
    return {
      state: false
    };
  },
  methods: {
    send() {
      this.state = !this.state;
    }
  },
  components: {
    VButton,
    VIcon,
    VButtonGroup
  }
};
</script>

<style>
</style>

