import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './router.js'
import "vuetify/dist/vuetify.min.css";
import VueScrollReveal from 'vue-scroll-reveal';
import Carousel3d from 'vue-carousel-3d';

// Using ScrollReveal's default configuration

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueScrollReveal);
Vue.use(Carousel3d);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

