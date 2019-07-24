<template>
  <div id="app">
    <div class="box">
      <v-button icon="setting" :loading="state" @click.native="send">提交</v-button>
      <v-button icon="setting" icon-position="right" :loading="state" @click.native="send">提交</v-button>
    </div>
    <div class="box">
      <v-button-group>
        <v-button icon="setting" :loading="state" @click.native="send">提交</v-button>
        <v-button>不知道</v-button>
        <v-button icon="setting" icon-position="right" :loading="state" @click.native="send">提交</v-button>
      </v-button-group>
    </div>
    <div class="box">
      <v-input value="张三" disabled />
      <v-input value="李四" readonly />
      <v-input v-model="text" />
      <div>{{text}}</div>
    </div>
    <div class="box">
      <v-input value="王二" error="error" />
    </div>
  </div>
</template>

<script>
import { VButton, VButtonGroup, VIcon, RegisterIcon, VInput } from './index';
RegisterIcon('//at.alicdn.com/t/font_1306426_z33pcj1yenp.js');
export default {
  data() {
    return {
      state: false,
      text: '',
    };
  },
  methods: {
    send() {
      this.state = !this.state;
    },
    onChange(e) {
      console.log(e.target.value);
    },
  },
  components: {
    VButton,
    VIcon,
    VButtonGroup,
    VInput,
  },
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 20px;
}
</style>

