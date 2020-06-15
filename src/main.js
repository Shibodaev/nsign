import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import PixelGlass from 'pixel-glass';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PixelGlass);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
