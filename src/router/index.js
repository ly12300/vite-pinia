import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'
import usrLogin from '../store/login.js'
const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(`../views/Index.vue`),
      meta: {
        title: '首页',
      },
    },
    {
      path:'/home',
      name:'home',
      component: () => import(`../views/Home.vue`),
    },
    {
      path:'/hello',
      name:'hello',
      component: () => import(`../components/HelloWorld.vue`),
    },
    {
      path: '/*',
      redirect: '/',
    },
  ]
})

// 导航守卫——前置守卫
router.beforeEach((to,from,next)=>{
  // 实例化
const usrlogin =usrLogin();
  if(usrlogin.token){
     // 去登录页
     if (to.path === '/home') {
      console.log('你已经登录了，就不能去login，转到主页')
      next('/')
    } else {
      next()
    }
  }else{
     // 没有登录，只能去白名单(那些不需要token就可以访问的页面)
     if (to.path === '/home') {
      next()
    } else {
      console.log('你没有登录，转到登录页')
      next('/home')
    }

  }
})

export default router