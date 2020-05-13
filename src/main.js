import Vue from "vue";
import App from "./App.vue";
import View from "./View.vue";
import vuetify from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";
import VueRouter from "vue-router";
import VueMobileDetection from "vue-mobile-detection";

Vue.config.productionTip = false;

Vue.use(VueMobileDetection);
Vue.use(VueRouter);

const routes = [{ path: "/", component: View }];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.use(VueAnalytics, {
  id: "UA-165919387-1",
  router,
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
