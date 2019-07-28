import Vue from 'vue';
import App from './src/App.vue';
import { VToast } from './src/index';

Vue.use(VToast);
new Vue({
  render: h => {
    return h(App);
  },
}).$mount('#app');
