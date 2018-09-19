import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import login from '@/components/login/login'
import regist from '@/components/regist/regist'
import search from '@/components/search/search'
import playsong from '@/components/playsong/playsong'
Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/playsong:id',
      name: 'playsong',
      component: playsong,
      props:true
    }
  ]
})
