import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "./store";
import App from "./App";
import router from "./router";
Vue.use(VueI18n);

import messages from "./i18n/en.json";

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  i18n,
  template: "<App/>",
  components: { App }
});
