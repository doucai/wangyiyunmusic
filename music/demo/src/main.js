// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import axios from 'axios'
import fastckick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import './assets/main.css'
import Public from './assets/public.js'
import 'vue2-animate/dist/vue2-animate.min.css';
/* import qs from 'qs' */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Vant).use(Public)
// Vue.prototype.$qs = qs
Vue.prototype.$http = axios
Vue.config.productionTip = false
fastckick.attach(document.body)
// 路由响应拦截
router.beforeEach((to,from,next)=>{
  if(!localStorage.username && to.path =="/search"){
    next({path:'/login'})
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
