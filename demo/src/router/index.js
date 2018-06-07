import Vue from 'vue'
import Router from 'vue-router'
import newmusic from "@/components/newmusic/newmusic"
import hotmusic from "@/components/hotmusic/hotmusic"
import hotsearch from "@/components/hotsearch/hotsearch"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'newmusic',
      component: newmusic
    },
    {
      path: '/hotsearch',
      name: 'hotsearch',
      component: hotsearch
    },
    {
      path: '/hotmusic',
      name: 'hotmusic',
      component: hotmusic
    }
    
  ]
})
