import Vue from 'vue'
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/hello.css";
import VueCarousel from "vue-carousel";
import VueWordCloud from 'vuewordcloud';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import globalMixins from "@/plugins/globalMixins";
import globalDirectives from "@/plugins/globalDirectives";

import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueCarousel);
Vue.use(VueWordCloud);
Vue.use(FlagIcon);
Vue.use(globalMixins);
Vue.use(globalDirectives);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
