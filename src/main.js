import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from "./router"
import '@/assets/css/main.css'
import vuetify from '@/plugins/vuetify'
import imageZoom from 'vue-image-zoomer';
import ZoomOnHover from "vue-zoom-on-hover";
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false
Vue.use(imageZoom);
Vue.use(ZoomOnHover);
Vue.use(VuePageTransition)

new Vue({
  render: h => h(App),
  vuetify,
  axios,
  router
}).$mount('#app')
