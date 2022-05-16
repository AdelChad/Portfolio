import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from "./router"
import '@/assets/css/main.css'
import vuetify from '@/plugins/vuetify'
import ZoomOnHover from "vue-zoom-on-hover";

Vue.config.productionTip = false
Vue.use(ZoomOnHover);

new Vue({
  render: h => h(App),
  vuetify,
  axios,
  router
}).$mount('#app')
