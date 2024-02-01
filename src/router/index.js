import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import(`../views/home.vue`)),
      meta: {
        title: '首页',
      },
    },

    {
      path: '/*',
      redirect: '/',
    },
  ]
})



export default router