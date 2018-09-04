import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import login from '@/components/login/login'
import regist from '@/components/regist/regist'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    }
  ]
})
