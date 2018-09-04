// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastckick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import './assets/main.css'
import Public from './assets/public.js'
import 'vue2-animate/dist/vue2-animate.min.css';

Vue.use(Vant).use(Public)
Vue.prototype.$http = axios
Vue.config.productionTip = false
fastckick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
