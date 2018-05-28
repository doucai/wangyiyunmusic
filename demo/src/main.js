// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/reset.css"
import fastClick from "fastclick"
import axios from "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
// 引入fastClick解决300ms延迟
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})








